<template>
  <div class="flex items-center">
    <div class="flex items-center justify-center w-full pl-3">
      <label for="dropzone-file" class="flex flex-col items-center justify-center border-gray-300 border-dashed rounded-lg cursor-pointer bg-blue-500 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-blue-700 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
          <div class="flex justify-items-center gap-2 bg-blue-500 hover:bg-blue-700 p-3 rounded-lg shadow-sm text-white">
              <p class=" rounded-lg shadow-sm text-white "><strong>Upload Excel File</strong></p>
              <svg class="w-7 h-87mB2 text-gray-500 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
              </svg>
          </div>
          <input id="dropzone-file" type="file" class="hidden" @change="handleFileChange" />
      </label>
      
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';

const emits = defineEmits(['update:modelValue']);

const file = ref(null);

const uploadProgress = ref(0);

const handleFileChange = (e) => {
  const file = e.target.files[0];
  const allowedTypes = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'text/csv', 'application/json'];

  if (!allowedTypes.includes(file.type)) {
      console.log('Selected file is not allowed.')
  }

  emits('update:modelValue', file);
  }
</script>
