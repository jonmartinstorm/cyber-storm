const fs = require("fs");
const path = require("path");
const imageFolder = "./src/images";

module.exports = () => {
  if (!fs.existsSync(imageFolder)) {
    console.log("no images folder found");
    return [];
  }

  return fs
    .readdirSync(imageFolder)
    .filter((file) => {
      const ext = path.extname(file).toLowerCase();
      return ext === ".jpg" || ext === ".jpeg" || ext === ".png" || ext === ".gif" || ext === ".avif" || ext === ".webp";
    })
    .map((file) => `/images/${file}`);
};