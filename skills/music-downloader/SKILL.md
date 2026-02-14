# Music Downloader

## Overview

This skill enables downloading high-quality audio from various platforms (YouTube, SoundCloud, Spotify, etc.) using yt-dlp and spotdl. It provides command templates for single tracks, playlists, albums, and advanced features like metadata embedding, thumbnail extraction, and format conversion.

## When to Use This Skill

Use this skill when users request:

- Downloading audio/music from YouTube, SoundCloud, Spotify, or other platforms
- Extracting audio from videos in MP3, Opus, or other formats
- Downloading entire playlists or albums
- High-quality audio with metadata and album art
- Batch downloading multiple tracks
- Converting video content to audio files

## Quick Start

### Most Common Use Case - Download MP3 from YouTube:
```bash
yt-dlp -f bestaudio --extract-audio --audio-format mp3 --audio-quality 0 -o "%(title)s.%(ext)s" "VIDEO_URL"
```

### Download from Spotify:
```bash
spotdl --audio-quality 320k --embed-metadata --output "{artist}/{title}.{ext}" "SPOTIFY_TRACK_URL"
```

**Note:** If you encounter issues, try downloading or updating yt-dlp via pip: `pip install --upgrade yt-dlp`

## General Commands

### List Available Formats
```bash
yt-dlp -F "URL"
```

### Download MP3 at Max Quality
```bash
yt-dlp -f bestaudio --extract-audio --audio-format mp3 --audio-quality 0 --postprocessor-args "-b:a 320k" -o "%(title)s.%(ext)s" "https://www.youtube.com/watch?v=..."
```

### Basic High-Quality MP3 Download
```bash
yt-dlp -f bestaudio --extract-audio --audio-format mp3 --audio-quality 0 -o "%(title)s.%(ext)s" "VIDEO_URL"
```

### Download Custom Bitrate
```bash
yt-dlp -f bestaudio --extract-audio --audio-format mp3 --postprocessor-args "-b:a 192k" -o "%(title)s.%(ext)s" "VIDEO_URL"
```

### Download and add Metadata Tags
```bash
yt-dlp -f bestaudio --extract-audio --audio-format mp3 --audio-quality 0 --embed-metadata -o "%(title)s.%(ext)s" "VIDEO_URL"
```

### Download Entire Playlist
```bash
yt-dlp -f bestaudio --extract-audio --audio-format mp3 --audio-quality 0 -o "%(playlist_title)s/%(title)s.%(ext)s" "PLAYLIST_URL"
```

## Best Practices

- Always use `--audio-quality 0` for best quality
- Use `--embed-metadata` for proper ID3 tags
- Create organized folder structures with `-o` patterns
- Check disk space before large downloads
- Use `--download-archive` to avoid re-downloading
