<template>
    <draggable v-model="todosStore.todos" item-key="id">
        <template #item="{ element, index }">
            <div v-show="todosStore.filter == 'All' || (todosStore.filter == 'Active' && !element.isCompleted) || (todosStore.filter == 'Completed' && element.isCompleted)"
                class="todo px-5 py-4 md:px-6 md:py-[17px] border-b-[1px] border-grayish-blue-200 dark:border-grayish-blue-900 flex items-center gap-3 md:gap-5 group">
                <label class="flex-grow flex items-center cursor-pointer gap-3 md:gap-5 group">
                    <!-- Todo Completion Toggle Button -->
                    <div class="h-5 w-5 md:h-6 md:w-6 p-[1px] rounded-full transition-custom"
                        :class="element.isCompleted ? 'bg-gradient-to-br from-sky-blue to-orchid'
                            : 'bg-grayish-blue-50 dark:bg-grayish-blue-950 group-hover:bg-gradient-to-br group-hover:from-sky-blue group-hover:to-orchid'">

                        <div class="h-full w-full rounded-full flex justify-center items-center"
                            :class="element.isCompleted ? 'bg-gradient-to-br from-sky-blue to-orchid' : 'bg-white dark:bg-blue-800'">
                            <IconCheck v-if="element.isCompleted" />
                        </div>
                        <input type="checkbox" v-model="element.isCompleted" class="hidden">
                    </div>
                    <!-- Todo Task -->
                    <p class="flex-grow text-normal whitespace-nowrap text-ellipsis overflow-hidden"
                        :class="element.isCompleted ? 'line-through text-grayish-blue-200 dark:text-grayish-blue-900' : 'text-grayish-blue-800 dark:text-grayish-blue-300'">
                        {{ element.task }}
                    </p>
                </label>
                <!-- Todo Removal Button -->
                <button type="button" :aria-label="`remove todo: ${element.task}`"
                    @click="() => todosStore.remove(index)" 
                    class="transition-custom hide-for-hover-only group-hover:opacity-50 hover:!opacity-100">
                    <IconCross class="h-[14px] w-[14px] md:h-5 md:w-5" />
                </button>

            </div>
        </template>
    </draggable>
</template>

<script setup>
import IconCheck from './icons/IconCheck.vue';
import IconCross from './icons/IconCross.vue';
import { useTodosStore } from '../stores/todos';
import draggable from 'vuedraggable';
const todosStore = useTodosStore();
</script>