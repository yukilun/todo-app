<template>
    <button type="button" aria-label="theme toggle button" @click="handleThemeToggle">
        <IconMoon v-if="theme == 'light'" />
        <IconSun v-else />
    </button>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import IconSun from './icons/IconSun.vue';
import IconMoon from './icons/IconMoon.vue';

const theme = ref('light');

onMounted(() => {
    const preferTheme = localStorage.getItem('prefer-theme');
    if((preferTheme && preferTheme == 'dark') || window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
        theme.value = 'dark';
    }
})

function handleThemeToggle() {
    const newTheme = theme.value == 'dark' ? 'light': 'dark';
    localStorage.setItem('prefer-theme', newTheme);
    theme.value = newTheme;
    if(newTheme == 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
}

</script>