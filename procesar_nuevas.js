const fs = require('fs');
const path = require('path');

const imgDir = 'c:/Users/camil/OneDrive/Escritorio/carta/img';
const files = fs.readdirSync(imgDir);

// Find the max number of existing 'recuerdo_X' files to know where to start
let maxIndex = 0;
files.forEach(file => {
    const match = file.match(/^recuerdo_(\d+)\./);
    if (match) {
        const num = parseInt(match[1]);
        if (num > maxIndex) maxIndex = num;
    }
});

console.log(`Starting index: ${maxIndex + 1}`);

const newRecuerdos = [];
let counter = maxIndex + 1;

files.forEach(file => {
    // Skip snoopy images, existing recuerdos, and mp3s
    if (file.toLowerCase().startsWith('snoopy') ||
        file.toLowerCase().startsWith('recuerdo_') ||
        file.endsWith('.mp3') ||
        fs.statSync(path.join(imgDir, file)).isDirectory()) {
        return;
    }

    const ext = path.extname(file);
    if (!['.jpg', '.jpeg', '.png', '.mp4'].includes(ext.toLowerCase())) {
        return;
    }

    const oldPath = path.join(imgDir, file);
    const newName = `recuerdo_${counter}${ext}`;
    const newPath = path.join(imgDir, newName);

    // Clean text
    let text = path.basename(file, ext);

    // Rename
    fs.renameSync(oldPath, newPath);

    newRecuerdos.push({
        t: text,
        i: counter,
        type: ext.toLowerCase() === '.mp4' ? 'video' : 'img'
    });

    counter++;
});

console.log(JSON.stringify(newRecuerdos, null, 2));
