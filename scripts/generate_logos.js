const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateLogos() {
  try {
    const outputDir = path.join('public', 'assets', 'logo');
    fs.mkdirSync(outputDir, { recursive: true });

    const image = sharp('public/image.png');
    const metadata = await image.metadata();

    // Generate WHITE version
    const whiteSvg = Buffer.from(
      `<svg width="${metadata.width}" height="${metadata.height}"><rect x="0" y="0" width="${metadata.width}" height="${metadata.height}" fill="#ffffff" /></svg>`
    );
    await sharp('public/image.png')
      .composite([{ input: whiteSvg, blend: 'in' }])
      .toFile(path.join(outputDir, 'logo-white.png'));
    console.log('✅ logo-white.png created');

    // Generate BLACK version
    const blackSvg = Buffer.from(
      `<svg width="${metadata.width}" height="${metadata.height}"><rect x="0" y="0" width="${metadata.width}" height="${metadata.height}" fill="#000000" /></svg>`
    );
    await sharp('public/image.png')
      .composite([{ input: blackSvg, blend: 'in' }])
      .toFile(path.join(outputDir, 'logo-black.png'));
    console.log('✅ logo-black.png created');

    // Copy white version as favicon
    fs.copyFileSync(
      path.join(outputDir, 'logo-white.png'),
      path.join('app', 'favicon.ico')
    );
    console.log('✅ favicon.ico updated (white version)');

    console.log('\nAll logos generated in public/logo/');
  } catch (err) {
    console.error('Error:', err);
  }
}

generateLogos();
