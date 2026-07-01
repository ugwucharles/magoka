const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const assetsDir = 'c:/Users/chief/Desktop/eatyum.food/eatyum.food/assets';
const esbuild = 'C:/Users/chief/AppData/Roaming/npm/node_modules/esbuild/bin/esbuild';

const files = fs.readdirSync(assetsDir).filter(f => f.endsWith('.js'));

// Step 1: Fix corrupted files (? ? -> ??)
let fixedCount = 0;
files.forEach(file => {
    const filePath = path.join(assetsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if it looks like HTML (was wrongly downloaded)
    if (content.trimStart().startsWith('<!DOCTYPE') || content.trimStart().startsWith('<html')) {
        console.log(`SKIPPING HTML file: ${file}`);
        return;
    }
    
    // Fix ? ? (with space) back to ?? 
    const fixed = content.replace(/\?\s+\?/g, '??');
    if (fixed !== content) {
        fs.writeFileSync(filePath, fixed, 'utf8');
        fixedCount++;
        console.log(`Fixed spacing in: ${file}`);
    }
});

console.log(`\nFixed ${fixedCount} files with corrupted ?? operators.`);

// Step 2: Bulk transpile with esbuild
console.log('\nRunning esbuild transpilation...');
const jsFiles = fs.readdirSync(assetsDir)
    .filter(f => f.endsWith('.js'))
    .map(f => path.join(assetsDir, f).replace(/\//g, '\\'));

// Filter out HTML-disguised files
const validJsFiles = jsFiles.filter(f => {
    const content = fs.readFileSync(f, 'utf8');
    return !content.trimStart().startsWith('<!DOCTYPE') && !content.trimStart().startsWith('<html');
});

console.log(`Transpiling ${validJsFiles.length} valid JS files...`);

try {
    execFileSync(
        'C:/Users/chief/AppData/Roaming/npm/node_modules/esbuild/node_modules/@esbuild/win32-x64/esbuild.exe',
        [
            ...validJsFiles,
            '--target=es2016',
            '--outdir=' + assetsDir.replace(/\//g, '\\'),
            '--allow-overwrite',
            '--log-limit=0'
        ],
        { stdio: 'inherit' }
    );
    console.log('\nAll files transpiled successfully!');
} catch(e) {
    console.error('esbuild error:', e.message);
}
