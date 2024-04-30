const fs = require('fs');
const DB_FILE_PATH = "./core/db";

console.log("[CRUD]");

function create(content) {
  // salvar o content no sistema
  fs.writeFileSync(DB_FILE_PATH, content);
  return content;
}

function read() {
  return fs.readFileSync(DB_FILE_PATH);
}

console.log(create("Hoje eu preciso gravar aulas de HTML!"));