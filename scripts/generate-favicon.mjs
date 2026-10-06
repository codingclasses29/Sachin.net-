import sharp from "sharp";
import fs from "fs";

async function generateFavicons() {
  console.log("Generating favicons from public/logo.png...");

  // 1. Generate 32x32 PNG for browser tab
  const png32 = await sharp("public/logo.png")
    .resize(32, 32, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  // 2. Generate 48x48 PNG
  const png48 = await sharp("public/logo.png")
    .resize(48, 48, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  // 3. Generate 64x64 PNG for app/icon.png
  await sharp("public/logo.png")
    .resize(64, 64, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile("app/icon.png");

  fs.copyFileSync("app/icon.png", "public/icon.png");

  // 4. Generate 180x180 PNG for Apple devices
  await sharp("public/logo.png")
    .resize(180, 180, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile("app/apple-icon.png");

  fs.copyFileSync("app/apple-icon.png", "public/apple-touch-icon.png");

  // 5. Construct valid ICO format with 32x32 PNG data
  const icoHeader = Buffer.alloc(22);
  icoHeader.writeUInt16LE(0, 0); // Reserved
  icoHeader.writeUInt16LE(1, 2); // Type 1 = ICO
  icoHeader.writeUInt16LE(1, 4); // 1 Image
  icoHeader.writeUInt8(32, 6);   // Width 32
  icoHeader.writeUInt8(32, 7);   // Height 32
  icoHeader.writeUInt8(0, 8);    // Color count (0 = no palette)
  icoHeader.writeUInt8(0, 9);    // Reserved
  icoHeader.writeUInt16LE(1, 10); // Color planes
  icoHeader.writeUInt16LE(32, 12); // Bits per pixel
  icoHeader.writeUInt32LE(png32.length, 14); // Image data size
  icoHeader.writeUInt32LE(22, 18); // Offset where PNG begins (22 bytes)

  const icoBuffer = Buffer.concat([icoHeader, png32]);
  fs.writeFileSync("app/favicon.ico", icoBuffer);
  fs.writeFileSync("public/favicon.ico", icoBuffer);

  console.log("✅ Successfully created app/favicon.ico and public/favicon.ico!");
  console.log("✅ Successfully updated app/icon.png and public/icon.png!");
  console.log("✅ Successfully created app/apple-icon.png and public/apple-touch-icon.png!");
}

generateFavicons().catch(console.error);
