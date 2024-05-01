const fs = require("fs");
const util = require("util");

class Writer{
    constructor() {
        this.writer = util.promisify(fs.writeFile);
    }

    async Writer(filepath, data) {
        try {
            await this.writer(filepath, data);
            return true
        } catch (err) {
            console.error("Failed to write file:", err);
            return false;
        }
    }

}
module.exports = Writer;
