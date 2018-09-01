# file-icon-info

file-icon-info is a node.js module that allows you to extract the icon image (returned as a base64 string) for a given `.exe` on your machine.

## Installation

`npm i file-icon-info`

## Usage

    const fii = require('file-icon-info');
    const fs = require('fs');
    fii.getIcon('executable-file-path.exe', data => {
        fs.writeFileSync('path-to-save-icon.ico', data, 'base64');
    });
