const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function convert() {
  const svgPath = path.join(__dirname, '..', 'public', 'assets', 'preview.svg');
  const outPath = path.join(__dirname, '..', 'public', 'assets', 'preview.png');

  if (!fs.existsSync(svgPath)) {
    console.error('preview.svg not found at', svgPath);
    process.exit(1);
  }

  try {
    await sharp(svgPath)
      .resize(1200, 630, { fit: 'cover' })
      .png({ quality: 90 })
      .toFile(outPath);
    console.log('Wrote', outPath);
  } catch (err) {
    console.error(err);
    process.exit(2);
  }
}

convert();
