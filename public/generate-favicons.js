const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

// Function to create a canvas with PS text
function createPSCanvas(size, fontSize) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');
  
  // Purple background
  ctx.fillStyle = '#6c5ce7';
  ctx.fillRect(0, 0, size, size);
  
  // White text
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${fontSize}px Inter, Arial, sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('PS', size/2, size/2);
  
  return canvas;
}

// Save the canvas to a PNG file
function saveCanvasToPNG(canvas, filename) {
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(filename, buffer);
  console.log(`Created ${filename}`);
}

// Create favicon.ico (you'll need to convert the PNG to ICO separately)
const favicon16 = createPSCanvas(16, 10);
const favicon32 = createPSCanvas(32, 18);
const favicon192 = createPSCanvas(192, 100);
const favicon512 = createPSCanvas(512, 260);

// Save files
saveCanvasToPNG(favicon16, path.join(__dirname, 'favicon16.png'));
saveCanvasToPNG(favicon32, path.join(__dirname, 'favicon32.png'));
saveCanvasToPNG(favicon192, path.join(__dirname, 'logo192.png'));
saveCanvasToPNG(favicon512, path.join(__dirname, 'logo512.png'));

console.log('\nInstructions:');
console.log('1. Convert favicon16.png and favicon32.png to .ico format using an online converter like favicon.io');
console.log('2. Replace the favicon.ico file in your public folder with the converted .ico file');
console.log('3. logo192.png and logo512.png are ready to use directly\n'); 