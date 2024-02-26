<template>
  <div class="p-4">
    <form @submit.prevent="saveBackgroundImage" enctype="multipart/form-data" class="flex flex-wrap items-center">
      <label for="fileInput" class="inline-block bg-blue-500 hover:bg-blue-700 p-3 mt-3 rounded-lg shadow-sm text-white text-center cursor-pointer me-2 mb-2 flex items-center">
        <span><b>Choose Background Image</b></span>
        <svg class="h-7 w-7 text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z"/>
          <path d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3" />
        </svg>
      </label>
      <input type="file" id="fileInput" accept="image/*" @change="onChange" class="hidden">
    </form>
  </div>
</template>
  <script setup>
  import { ref,defineEmits } from 'vue';
  import axios from 'axios';

  const emits = defineEmits(
    "ReturnPath"
  )
  
  const backgroundImage = ref(null);
  
  const onChange = (event) => {
    backgroundImage.value = event.target.files[0];
    saveBackgroundImage();
  }
  
  const saveBackgroundImage = async () => {
    try {
      const formData = new FormData();
      formData.append('backgroundImage', backgroundImage.value);
  
      const response = await axios.post('/api/save-background-image', formData);

      document.querySelector(".backgroundImageDom").dispatchEvent(new CustomEvent("returnPath",{"detail":{"imagepath":response.data.path}}));
      //emits("ReturnPath", response.data.path)

      console.log(response)
  
      event.target.value = '';
  
      alert('Background image saved successfully!');
    } catch (error) {
      console.error('Error saving background image:', error);
      alert('Failed to save background image.');
    }
  }

  

  
  
  </script>
  