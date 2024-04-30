import fs from "fs"; //ES6
const DB_FILE_PATH = "./core/db";

console.log("[CRUD]");

interface Todo {
  date: string;
  content: string;
  done: boolean;
}

function create(content: string) {
  const todo: Todo = {
    date: new Date().toISOString(),
    content: content,
    done: false,
  };

  const todos: Array<Todo> = [
    ...read(),
    todo,
  ];
  // salvar o content no sistema
  fs.writeFileSync(DB_FILE_PATH, JSON.stringify({
    todos,
    dogs: [],
  }, null, 2));
  return content;
}

function read(): Array<Todo> {
  const dbString = fs.readFileSync(DB_FILE_PATH, "utf8");
  const db = JSON.parse(dbString || "{}");
  if(!db.todos) { // Fail Fast Validations
    return [];
  }
  return db.todos;
}

function CLEAR_DB() {
  fs.writeFileSync(DB_FILE_PATH, "");
}

//[SIMULATION]
CLEAR_DB();
create("Hoje eu preciso gravar a 1º aula de HTML!");
create("Hoje eu preciso gravar a 2º aula de HTML!");
create("Hoje eu preciso gravar a 3º aula de HTML!");
console.log(read())