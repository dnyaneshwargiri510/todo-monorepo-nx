import { createTodoStore } from '@todo/core';
import { ref } from 'vue'; // Resolved directly from a .zip file!

const store = createTodoStore();
store.addTodo('Show presentation to developers');

const reactiveTodos = ref(store.getTodos());
console.log(
  '🚀 PnP App Successfully Executed! Current Todos:',
  reactiveTodos.value,
);
