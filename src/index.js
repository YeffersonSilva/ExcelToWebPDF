var Reader = require("./Reader");
var reader = new Reader();
var Processor = require("./Processor");
var Table = require("./Table");
var HtmlParser = require("./HtmlParser");
var Writer = require("./Writer");
var PdfWriter = require("./PdfWriter");

var leitor = new Reader();
escritor = new Writer();

async function main() {
  try {
    var data = await reader.asyncRead("./src/CotizacionDolar.csv");
    var dataProcessor = Processor.Process(data);
    var user = new Table(dataProcessor);

    var html = await HtmlParser.Parse(user);
    escritor.Writer(Date.now() + ".html", html);
    PdfWriter.WritePDF(Date.now() + ".PDF", html);

    console.log(html);
    console.log(user.RowCount);
  } catch (error) {
    console.error("Error in main execution:", error);
  }
}

main();
