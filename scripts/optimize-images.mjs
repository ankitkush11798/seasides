import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TARGET_DIR = path.join(__dirname, '../public');
const QUALITY = 80;

async function getFiles(dir) {
    const dirents = await fs.readdir(dir, { withFileTypes: true });
    const files = await Promise.all(
        dirents.map(dirent => {
            const res = path.resolve(dir, dirent.name);
            return dirent.isDirectory() ? getFiles(res) : res;
        })
    );
    return Array.prototype.concat(...files);
}

async function optimizeImages() {
    console.log('🚀 Starting image optimization (Windows Safe Mode)...');
    console.log(`📂 Target Directory: ${TARGET_DIR}`);
    console.log(`🎨 Quality Setting: ${QUALITY}%\n`);

    try {
        const files = await getFiles(TARGET_DIR);
        const imageFiles = files.filter(file =>
            /\.(jpg|jpeg|png|webp)$/i.test(file) && !file.includes('node_modules')
        );

        let savedBytes = 0;
        let processedCount = 0;

        for (const file of imageFiles) {
            try {
                const ext = path.extname(file).toLowerCase();

                // Read file to buffer first to avoid file locking issues on Windows
                const inputBuffer = await fs.readFile(file);
                const originalSize = inputBuffer.length;

                let pipeline = sharp(inputBuffer);

                if (ext === '.jpg' || ext === '.jpeg') {
                    pipeline = pipeline.jpeg({ mozjpeg: true, quality: QUALITY });
                } else if (ext === '.png') {
                    pipeline = pipeline.png({ quality: QUALITY, compressionLevel: 9, palette: true });
                } else if (ext === '.webp') {
                    pipeline = pipeline.webp({ quality: QUALITY });
                }

                const outputBuffer = await pipeline.toBuffer();
                const newSize = outputBuffer.length;

                if (newSize < originalSize) {
                    await fs.writeFile(file, outputBuffer);
                    const savings = originalSize - newSize;
                    savedBytes += savings;
                    const percent = ((savings / originalSize) * 100).toFixed(1);
                    console.log(`✅ Optimized: ${path.relative(TARGET_DIR, file)} (-${(savings / 1024).toFixed(2)} KB / -${percent}%)`);
                    processedCount++;
                } else {
                    console.log(`⏭️  Skipped: ${path.relative(TARGET_DIR, file)} (Already optimized)`);
                }
            } catch (err) {
                console.error(`❌ Error processing ${path.relative(TARGET_DIR, file)}:`, err.message);
            }
        }

        console.log('\n🎉 Optimization Complete!');
        console.log(`🖼️  Processed: ${processedCount} images`);
        console.log(`💾 Total Space Saved: ${(savedBytes / 1024 / 1024).toFixed(2)} MB`);

    } catch (error) {
        console.error('Fatal Error:', error);
    }
}

optimizeImages();
