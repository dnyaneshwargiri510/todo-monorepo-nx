// Simple encapsulated state manager for the todo app
export function createTodoStore() {
  let todos = [];
  return {
    getTodos: () => todos,
    addTodo: (text) => {
      const newTodo = { id: Date.now(), text, completed: false };
      todos.push(newTodo);
      return newTodo;
    },
    toggleTodo: (id) => {
      todos = todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t,
      );
    },
  };
}
