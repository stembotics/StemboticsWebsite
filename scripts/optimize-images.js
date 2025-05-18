import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contentDir = path.join(__dirname, '../public/content');
const optimizedDir = path.join(contentDir, 'optimized');

// Create optimized directory if it doesn't exist
if (!fs.existsSync(optimizedDir)) {
  fs.mkdirSync(optimizedDir);
}

// Get all image files
const files = fs.readdirSync(contentDir).filter(file => 
  /\.(jpg|jpeg|png)$/i.test(file)
);

// Process each image
async function optimizeImages() {
  for (const file of files) {
    const inputPath = path.join(contentDir, file);
    const outputPath = path.join(optimizedDir, file);
    
    try {
      await sharp(inputPath)
        .resize(1920, null, { // Max width 1920px, maintain aspect ratio
          withoutEnlargement: true
        })
        .jpeg({ quality: 85 }) // Convert to JPEG with 85% quality
        .toFile(outputPath);
      
      console.log(`Optimized ${file}`);
    } catch (error) {
      console.error(`Error processing ${file}:`, error);
    }
  }
}

optimizeImages(); 