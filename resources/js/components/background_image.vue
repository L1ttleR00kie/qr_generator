<template>
    <div class="flex items-center">
        <div class="flex pl-2">
            <label for="dropzone-file" class="flex flex-col items-center justify-center border-gray-300 border-dashed rounded-lg cursor-pointer bg-blue-300 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-blue-700 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div class="flex flex-col items-center justify-center pt-2.5 pb-2.5 pl-2.5 pr-2.5">
                    <svg class="w-7 h-5 text-gray-800 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M16 18H8l2.5-6 2 4 1.5-2 2 4Zm-1-8.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"/>
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 3v4c0 .6-.4 1-1 1H5m14-4v16c0 .6-.4 1-1 1H6a1 1 0 0 1-1-1V8c0-.4.1-.6.3-.8l4-4 .6-.2H18c.6 0 1 .4 1 1ZM8 18h8l-2-4-1.5 2-2-4L8 18Zm7-8.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"/>
                    </svg>
                    <p class="text-xs text-gray-500 text-white"><strong>Upload Background</strong></p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" @change="handleImageChange" accept="image/*"/>
            </label>
        </div>
    </div>
</template>

<script setup>

    import { ref, defineEmits } from 'vue';

    const emits = defineEmits(['update:modelValue']);

    const handleImageChange = (event) => {
        const image = event.target.files[0];

        emits('update:modelValue', image);

    }
</script>
