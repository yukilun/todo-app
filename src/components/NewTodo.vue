<template>
    <div id="newTodo" class="bg-white dark:bg-blue-800 px-5 py-4 md:px-6 md:py-[17px] rounded-lg shadow-custom dark:shadow-custom-dark flex items-center gap-3 md:gap-5">
        <div class="flex-shrink-0 h-5 w-5 md:h-6 md:w-6 p-[1px] rounded-full bg-grayish-blue-50 dark:bg-grayish-blue-950"> 
            <div class="h-full w-full rounded-full flex justify-center items-center bg-white dark:bg-blue-800">
            </div>
        </div>
        <input type="text" placeholder="Create a new todos..." v-model="task" @keypress="handleKeyPress"
            class="bg-white dark:bg-blue-800 flex-grow text-normal leading-[1em] focus:outline-none caret-sky-blue
            text-grayish-blue-800 placeholder:text-grayish-blue-600
            dark:text-grayish-blue-300 dark:placeholder:text-grayish-blue-700" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useTodosStore } from '../stores/todos';

const task = ref('');
const todosStore = useTodosStore();

function handleKeyPress(e) {
    if(e.key === 'Enter') {
        e.preventDefault();
        todosStore.add({
            task: task.value, 
            isCompleted: false
        });
        task.value = '';
    }
}
</script>