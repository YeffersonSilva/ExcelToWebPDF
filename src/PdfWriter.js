var pdf = require('html-pdf');

class PdfWriter {
  static WritePDF(fileName, html) {
    pdf.create(html, {}).toFile(fileName, (err) => {
    
    });
  }
}

module.exports = PdfWriter;