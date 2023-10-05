<template>
    <div id="todos" class="mt-4 md:mt-6">
        <div id="todos-list"
            class="bg-white dark:bg-blue-800 rounded-lg overflow-hidden shadow-custom dark:shadow-custom-dark">
            <TodoList />
            <div id="todos-action"
                class="bg-white dark:bg-blue-800 px-5 py-4 md:px-6 md:py-[17px] flex justify-between items-center gap-3 md:gap-5">
                <p class="text-small text-grayish-blue-600 dark:text-grayish-blue-900">
                    {{ todosStore.activeCount }} items left
                </p>
                <TodosFilter class="hidden md:flex" />
                <button type="button" @click="todosStore.clearCompleted"
                    class="text-small text-grayish-blue-600 dark:text-grayish-blue-900 hover:text-grayish-blue-800 dark:hover:text-grayish-blue-800">
                    Clear Completed
                </button>
            </div>
        </div>
        <div id="todos-mobile-filter"
            class="bg-white dark:bg-blue-800 rounded-lg py-4 mt-4 shadow-custom dark:shadow-custom-dark flex md:hidden justify-center">
            <TodosFilter />
        </div>
    </div>
</template>

<script setup>
import TodosFilter from './TodosFilter.vue';
import { useTodosStore } from '../stores/todos';
import TodoList from './TodoList.vue';
const todosStore = useTodosStore();
</script>