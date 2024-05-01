// HtmlParser.js
const ejs = require('ejs');

class HtmlParser {
  static async Parse(table) {
    try {
      if (!table.header || !Array.isArray(table.header) || !table.rows || !Array.isArray(table.rows)) {
        throw new Error("Invalid 'header' or 'rows' data. Expected an array.");
      }
      return await ejs.renderFile("./src/table.ejs", { header: table.header, rows: table.rows });
    } catch (error) {
      console.error('Error rendering EJS:', error);
      throw error;
    }
  }
}

module.exports = HtmlParser;
