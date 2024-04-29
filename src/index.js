var Reader = require("./Reader");
var reader = new Reader();

async function main() {
    try {
        var data = await reader.asyncRead("./src/CotizacionDolar.csv");
        console.log(data);
    } catch (error) {
        console.error("Error in main execution:", error);
    }
}

main();
