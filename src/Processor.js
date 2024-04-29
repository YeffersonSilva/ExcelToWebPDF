class Processor {
  static Process(data) {
    var splitWord = data.split("\r\n");
    var rows = [];
    splitWord.forEach((row) => {
      var arr = row.split(",");
      rows.push(arr);
    });
      
    return rows;
  }
}
module.exports = Processor;
