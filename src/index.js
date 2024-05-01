// index.js
const Table = require('./Table');
const HtmlParser = require('./HtmlParser');

let data = [
    ['Column 1', 'Column 2', 'Column 3'], // Cabecera
    ['Data 1', 'Data 2', 'Data 3'],       // Datos de la fila 1
    ['Data 4', 'Data 5', 'Data 6']        // Datos de la fila 2
];

let table = new Table(data);

HtmlParser.Parse(table)
  .then(html => {
    console.log(html);
  })
  .catch(err => {
    console.error('Error:', err);
  });
