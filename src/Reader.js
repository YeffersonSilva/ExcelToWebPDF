const fs = require("fs");
const util = require("util");

class Reader {
  constructor() {
    this.reader = util.promisify(fs.readFile);
  }

  async asyncRead(filepath) {
    try {
      return await this.reader(filepath, "utf-8");
    } catch (err) {
      console.error("Failed to read file:", err);
      return undefined;
    }
  }
}

module.exports = Reader;
