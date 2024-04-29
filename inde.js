// Description: This file is the entry point of the application
const fs = require("fs")


fs.readFile("./ii.lima.txt", {encoding :'utf8'}, (err, data) => {
    if(err) {
        console.error(err)
    }
    console.log(data)
})



