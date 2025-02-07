# Bookmark Security Guard

A Chrome extension that protects users from potentially malicious bookmarks by detecting JavaScript injection attempts and other suspicious patterns.

## Features

- Automatically scans new bookmarks for security threats
- Detects various types of JavaScript injection attempts:
  - javascript: protocol URLs
  - data: URLs that could contain JavaScript
  - vbscript: protocol
  - Embedded script tags
  - Event handler attributes
- Shows warning alerts when suspicious bookmarks are detected
- Runs silently in the background for safe bookmarks

## Installation

1. Clone this repository or download the files
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the extension directory
5. The extension is now active and will monitor new bookmarks

## Usage

The extension works automatically in the background:
- When you create a new bookmark, it will be scanned for suspicious patterns
- If a potentially malicious bookmark is detected, you'll see a warning alert
- Safe bookmarks are processed silently (with a console log for debugging)

## Files

- `manifest.json`: Extension configuration and permissions
- `background.js`: Core logic for bookmark scanning
- `README.md`: This documentation

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License

Copyright (c) 2024

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
