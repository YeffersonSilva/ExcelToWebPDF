const fs = require("fs");
const util = require("util");

class Writer{
    constructor() {
        this.writer = util.promisify(fs.writeFile);
    }

    async Write(filepath, data) {
        try {
            return await this.writer(filepath, data);
        } catch (err) {
            console.error("Failed to write file:", err);
            return undefined;
        }
    }

}