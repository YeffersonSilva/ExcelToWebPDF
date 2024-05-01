// Table.js
class Table {
  constructor(arr) {
    this.header = arr[0]; // Almacena la primera fila como cabecera
    arr.shift();          // Elimina la primera fila del arreglo original
    this.rows = arr;      // Almacena el resto de filas como datos
  }

  get RowCount() {
    return this.rows.length;
  }
    
  get ColumnCount() {
    return this.header.length;
  }
}

module.exports = Table;
