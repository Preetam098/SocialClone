const fs = require("fs");
const path = require("path");

const fileToDeletePath = (filePath) => {
  const fullPath = path.join(__dirname, "../", filePath); 
  fs.unlink(fullPath, (err) => {
    if (err) {
      console.error("Error deleting file:", err);
    } else {
      console.log("File deleted!");
    }
  });
};


module.exports = { fileToDeletePath };
