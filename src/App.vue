<template>
  <div class="min-h-screen bg-gray-50 dark:bg-blue-950 bg-fixed bg-top bg-no-repeat bg-contain
    bg-mobile-light dark:bg-mobile-dark md:bg-desktop-light md:dark:bg-desktop-dark">
    <div class="w-[87%] max-w-[540px] mx-auto py-12">
      <Header />
      <main>
        <NewTodo />
        <Todos />
        <div class="text-center text-small text-grayish-blue-600 dark:text-grayish-blue-900 mt-11 md:mt-12">
          Drag and drop to reorder list
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import NewTodo from './components/NewTodo.vue';
import Todos from './components/Todos.vue';
</script>