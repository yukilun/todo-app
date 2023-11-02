<template>
    <div class="flex text-filter font-bold gap-5">
        <label v-for="option in filterOptions" :key="option" class="focus-within:outline-auto"
            :class="todosStore.filter == option ? 'text-blue-500' : 
                'cursor-pointer text-grayish-blue-600 dark:text-grayish-blue-900 hover:text-grayish-blue-800 dark:hover:text-grayish-blue-100'">
            <span>{{option}}</span>
            <input type="radio" v-model="todosStore.filter" :value="option" class="h-0 w-0" />
        </label>
    </div>
</template>

<script setup>
import { useTodosStore } from '../stores/todos';            
const todosStore = useTodosStore(); 
const filterOptions = ['All', 'Active', 'Completed'];
</script>