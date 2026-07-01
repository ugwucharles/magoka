const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const assetsDir = 'c:/Users/chief/Desktop/eatyum.food/eatyum.food/assets';
const files = fs.readdirSync(assetsDir).filter(f => f.endsWith('.js'));

console.log(`Found ${files.length} JS files to transpile...`);

files.forEach((file, index) => {
    const filePath = path.join(assetsDir, file);
    const tempPath = filePath + '.tmp';
    try {
        // Run esbuild to convert ?? and ?. to ES2016-compatible syntax
        execSync(`npx esbuild "${filePath}" --target=es2016 --outfile="${tempPath}"`, { stdio: 'ignore' });
        fs.renameSync(tempPath, filePath);
        console.log(`[${index + 1}/${files.length}] Transpiled ${file}`);
    } catch (err) {
        console.error(`Failed to transpile ${file}:`, err.message);
    }
});
console.log('All files transpiled successfully!');
