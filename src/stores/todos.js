import { ref, onMounted, computed, watch } from 'vue'
import { defineStore } from 'pinia'

export const useTodosStore = defineStore('todos', () => {
  const todos = ref([
    {id: 0, task: 'Complete online JavaScript course', isCompleted: true},
    {id: 1, task: 'Jog around the park 3x', isCompleted: false},
    {id: 2, task: '10 minutes meditation', isCompleted: false},
    {id: 3, task: 'Rest for 1 hour', isCompleted: false},
    {id: 4, task: 'Pick up groceries', isCompleted: false},
    {id: 5, task: 'Complete Todo App on Frontend Mentor', isCompleted: false},
  ]);
  const lastId = ref(5); 
  const filter = ref('All');

  const activeCount = computed(() => {
    return todos.value.reduce((acc, todo) => {
        if(!todo.isCompleted) acc++;
        return acc;
    }, 0);
});

  onMounted(() => {
    let record = localStorage.getItem('record');
    if(record) {
        record = JSON.parse(record);
        todos.value = record.todos;
        lastId.value = record.lastId;
    }
  });

  function add(todo) {
    todo.id = ++lastId.value;
    todos.value.push(todo);
  }

  function remove(idx){
    todos.value.splice(idx, 1);
  }

  function clearCompleted() {
    todos.value = todos.value.filter(todo => !todo.isCompleted);
  }
  
  function saveRecord() {
    const record = JSON.stringify({
        lastId: lastId.value,
        todos: todos.value
    });
    localStorage.setItem('record', record);
  }

  watch(()=>todos.value, (newTodos)=> {
    saveRecord();
  }, {deep: true});

  return { todos, filter, activeCount, add, remove, clearCompleted, saveRecord };
})
