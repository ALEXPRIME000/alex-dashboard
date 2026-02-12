#!/bin/bash
# Fix OAuth script for Kabundji
# Run this to refresh expired Google authentication

echo "=============================================="
echo "  OAuth Refresh Script"
echo "=============================================="
echo ""
echo "This will refresh authentication for john.melo.testing01@gmail.com"
echo ""

export GOG_KEYRING_PASSWORD="openclaw"

echo "Step 1: Removing expired credentials..."
gog auth remove john.melo.testing01@gmail.com --yes 2>/dev/null || true

echo ""
echo "Step 2: Adding fresh authentication..."
echo "You will be asked to authorize in browser. Choose:"
echo "  - Gmail, Calendar, Drive, Contacts, Docs, Sheets"
echo ""
gog auth add john.melo.testing01@gmail.com --services gmail,calendar,drive,contacts,docs,sheets

echo ""
echo "Step 3: Testing connection..."
gog gmail search '"newer_than:1d"' --max 1 --account john.melo.testing01@gmail.com

echo ""
echo "=============================================="
echo "  OAuth refresh complete!"
echo "=============================================="