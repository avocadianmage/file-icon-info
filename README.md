# file-icon-info

file-icon-info is a node.js module that allows you to extract the icon image for a given `.exe` on your machine. A high-resolution, 256x256 image is returned as a base64 encoded string.

## Installation

`npm i file-icon-info`

## Usage

    const fii = require('file-icon-info');
    const fs = require('fs');
    fii.getIcon('executable-file-path.exe', data => {
        fs.writeFileSync('path-to-save-icon.ico', data, 'base64');
    });
