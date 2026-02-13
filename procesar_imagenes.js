const fs = require('fs');
const path = require('path');

const imgDir = 'c:/Users/camil/OneDrive/Escritorio/carta/img';
const files = fs.readdirSync(imgDir);

let counter = 1;
const recuerdos = [];

files.forEach(file => {
    // Skip snoopy images and directory itself if any
    if (file.toLowerCase().startsWith('snoopy') || fs.statSync(path.join(imgDir, file)).isDirectory()) {
        return;
    }

    const ext = path.extname(file);
    // Only process images and videos
    if (!['.jpg', '.jpeg', '.png', '.mp4'].includes(ext.toLowerCase())) {
        return;
    }

    const oldPath = path.join(imgDir, file);
    const newName = `recuerdo_${counter}${ext}`;
    const newPath = path.join(imgDir, newName);

    // Initial check to prevent overwriting if script runs twice
    if (file.startsWith('recuerdo_')) {
        console.log(`Skipping already renamed file: ${file}`);
         // Still add to array to print it out, assuming it was already processed?
         // Actually, if it's already renamed, I lost the original text unless I have a mapping.
         // But for this first run, I assume they are not renamed.
         // If they were, I would need a different approach.
         // Let's assume raw state.
        return;
    }

    // Rename
    fs.renameSync(oldPath, newPath);

    // Clean up text
    let text = path.basename(file, ext);
    // Remove "foto " prefix if exists, valid mostly for "foto 12 de febrero..." but generic is better
    // text = text.replace(/^foto\s+/i, ''); 

    recuerdos.push({
        texto: text,
        img: `img/${newName}`,
        tipo: ext.toLowerCase() === '.mp4' ? 'video' : 'img'
    });

    counter++;
});

console.log(JSON.stringify(recuerdos, null, 2));
