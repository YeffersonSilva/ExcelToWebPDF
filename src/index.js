var Reader = require("./Reader");
var reader = new Reader();
var Processor = require("./Processor");
var Table = require("./Table");

async function main() {
    try {
        var data = await reader.asyncRead("./src/CotizacionDolar.csv");
       var dataProcessor= Processor.Process(data);
        var user = new Table(dataProcessor);
        console.log(user.header);
    } catch (error) {
        console.error("Error in main execution:", error);
    }
}

main();
