#!/usr/bin/env python3
"""Upload Pulse Graphix documents to Google Drive"""
import os
import sys
import json
import pickle
from googleapiclient.discovery import build
from googleapiclient.http import MediaFileUpload
from google.auth.transport.requests import Request

# Paths
OUTPUT_DIR = "/home/ubuntu/.openclaw/workspace/output"
CREDENTIALS_FILE = "/home/ubuntu/.openclaw/credentials/google_client_secret.json"
TOKEN_FILE = "/home/ubuntu/.openclaw/credentials/drive_token.pickle"

def get_drive_service():
    """Get authenticated Google Drive service"""
    creds = None
    
    # Load existing token
    if os.path.exists(TOKEN_FILE):
        with open(TOKEN_FILE, 'rb') as token:
            creds = pickle.load(token)
    
    # Refresh or create new token
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            print("Token needs refresh. Using gog auth...")
            return None
    
    return build('drive', 'v3', credentials=creds, cache_discovery=False)

def create_folder(service, name, parent_id=None):
    """Create a folder in Google Drive"""
    metadata = {
        'name': name,
        'mimeType': 'application/vnd.google-apps.folder'
    }
    if parent_id:
        metadata['parents'] = [parent_id]
    
    folder = service.files().create(body=metadata, fields='id').execute()
    return folder['id']

def upload_file(service, file_path, parent_id=None):
    """Upload a file to Google Drive"""
    file_name = os.path.basename(file_path)
    metadata = {'name': file_name}
    if parent_id:
        metadata['parents'] = [parent_id]
    
    media = MediaFileUpload(file_path, resumable=True)
    file = service.files().create(body=metadata, media_body=media, fields='id').execute()
    return file['id']

def share_file(service, file_id, email):
    """Share a file with an email address"""
    permission = {
        'type': 'user',
        'role': 'writer',
        'emailAddress': email
    }
    service.permissions().create(fileId=file_id, body=permission).execute()

def main():
    print("🔌 Connecting to Google Drive...")
    service = get_drive_service()
    
    if not service:
        print("❌ Could not authenticate. Please run: gog auth list")
        return False
    
    print("✅ Connected to Google Drive")
    
    # Create main folder
    print("📁 Creating 'Pulse Graphix Documents' folder...")
    main_folder_id = create_folder(service, "Pulse Graphix Documents")
    print(f"   Folder ID: {main_folder_id}")
    
    # Create subfolders
    folders = {}
    for folder_name in ["Invoices", "Quotations", "Marketing"]:
        print(f"📁 Creating '{folder_name}' folder...")
        folder_id = create_folder(service, folder_name, main_folder_id)
        folders[folder_name] = folder_id
        print(f"   Folder ID: {folder_id}")
    
    # Upload files
    print("\n📤 Uploading files...")
    
    # Invoices
    for file in ["invoice-fr.html", "invoice-en.html"]:
        path = os.path.join(OUTPUT_DIR, "invoices", file)
        if os.path.exists(path):
            print(f"   Uploading {file}...")
            upload_file(service, path, folders["Invoices"])
    
    # Quotations  
    for file in ["devis-fr.html", "quotation-en.html"]:
        path = os.path.join(OUTPUT_DIR, "quotations", file)
        if os.path.exists(path):
            print(f"   Uploading {file}...")
            upload_file(service, path, folders["Quotations"])
    
    # Marketing materials from drafts
    drafts_dir = "/home/ubuntu/.openclaw/workspace/drafts"
    for file in ["linkedin-posts.md", "service-catalog.html", "paris-prospects.md", "cold-emails.md"]:
        path = os.path.join(drafts_dir, file)
        if os.path.exists(path):
            print(f"   Uploading {file}...")
            upload_file(service, path, folders["Marketing"])
    
    print("\n✅ All files uploaded successfully!")
    return True

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)
