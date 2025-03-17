const fs = require('fs');
const path = require('path');

// Search for a string in a file
function searchStringInFile(filePath, searchString) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return content.includes(searchString);
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return false;
  }
}

// Recursively walk through directory
function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

console.log('Verifying build files do not contain FontAwesome references...');

let foundReferences = false;
const searchStrings = ['kit.fontawesome.com', 'a076d05399.js'];

// Check files in the build directory
walkDir('./build', filePath => {
  for (const searchString of searchStrings) {
    if (searchStringInFile(filePath, searchString)) {
      console.error(`WARNING: Found FontAwesome reference in ${filePath}`);
      foundReferences = true;
    }
  }
});

if (foundReferences) {
  console.error('FontAwesome references found in build files. This may cause CORS issues.');
  process.exit(1);
} else {
  console.log('No FontAwesome references found in build files. Ready to deploy!');
} 