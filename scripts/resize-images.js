const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imageDir = 'public/images/treats';

function resizeImagesInDir(dir) {
  if (!fs.existsSync(dir)) {
    console.log(`Directory ${dir} does not exist`);
    return;
  }

  const files = fs.readdirSync(dir, { withFileTypes: true });
  
  files.forEach(file => {
    const fullPath = path.join(dir, file.name);
    
    if (file.isDirectory()) {
      resizeImagesInDir(fullPath);
    } else if (file.name.match(/\.(jpg|jpeg|png)$/i)) {
      console.log(`Resizing ${fullPath}...`);
      
      sharp(fullPath)
        .resize(800, 800, {
          fit: 'cover',
          position: 'center'
        })
        .jpeg({ quality: 85 })
        .toFile(fullPath + '.temp')
        .then(() => {
          fs.renameSync(fullPath + '.temp', fullPath);
          console.log(`✓ Resized ${file.name}`);
        })
        .catch(err => console.error(`Error: ${err}`));
    }
  });
}

resizeImagesInDir(imageDir);
