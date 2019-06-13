import fs from "fs";
import path from "path";
import jsonfile from "jsonfile";

export default {
  getCurrentDirectoryBase: () => {
    return path.basename(process.cwd());
  },
  readStorage: () => {
    const jsonPath = path.join(__dirname, "../storage.json");
    return jsonfile.readFile(jsonPath);
  },
  saveStorage: json => {
    const jsonPath = path.join(__dirname, "../storage.json");
    return jsonfile.writeFile(jsonPath, json);
  },
  directoryExists: filePath => {
    try {
      return fs.statSync(filePath).isDirectory();
    } catch (err) {
      return false;
    }
  }
};
