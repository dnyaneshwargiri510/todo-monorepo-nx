import { createApp, ref } from 'vue';
import { createTodoStore } from '@todo/core'; // Resolved instantly via .pnp.cjs

const store = createTodoStore();

const App = {
  setup() {
    const todos = ref(store.getTodos());
    const newTodoText = ref('');

    const handleAdd = () => {
      if (!newTodoText.value.trim()) return;
      store.addTodo(newTodoText.value);
      todos.value = [...store.getTodos()]; // Trigger Vue reactivity
      newTodoText.value = '';
    };

    return { todos, newTodoText, handleAdd };
  },
  template: `
    <div class="todo-app">
      <h2>Yarn PnP Monorepo Todo</h2>
      <input v-model="newTodoText" @keyup.enter="handleAdd" placeholder="What needs doing?" />
      <ul>
        <li v-for="todo in todos" :key="todo.id">{{ todo.text }}</li>
      </ul>
    </div>
  `,
};

createApp(App).mount('#app');
