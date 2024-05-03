async function get() {
  return fetch("api/todos").then(async (responseServer) => {
    const todosString = await responseServer.text();
    const todoFromServer = JSON.parse(todosString).todos;
    return todoFromServer;
  });
}
export const todoController = {
  get,
};
