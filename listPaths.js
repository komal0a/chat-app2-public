const fs = require('fs');
const path = require('path');

function listFiles(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    console.log(fullPath);
    if (fs.statSync(fullPath).isDirectory()) {
      listFiles(fullPath);
    }
  }
}

listFiles(__dirname);
