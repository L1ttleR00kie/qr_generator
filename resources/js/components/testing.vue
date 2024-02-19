<template>
  <div class="p-4">
    <!-- Display the saved background image -->
    <div v-if="savedBackgroundImagePath" class="mt-4">
      <h3>Saved Background Image:</h3>
      <img :src="savedBackgroundImagePath" alt="Saved Background Image" class="max-w-full h-auto">
    </div>

    <!-- Form for uploading a new background image -->
    <form @submit.prevent="saveBackgroundImage" enctype="multipart/form-data">
      <input type="file" accept="image/*" @change="onChange">
      <button type="submit" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Save Background Image</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

// Define reactive variables
const backgroundImage = ref(null);
const savedBackgroundImagePath = ref('');

// Define onChange function to handle file input change
const onChange = (event) => {
  backgroundImage.value = event.target.files[0];
}

// Define saveBackgroundImage function to upload background image
const saveBackgroundImage = async () => {
  try {
    const formData = new FormData();
    formData.append('backgroundImage', backgroundImage.value);

    // Send the background image to the server for upload
    const response = await axios.post('/api/save-background-image', formData);

    

    // Reset the input field after successful upload
    event.target.value = '';

    alert('Background image saved successfully!');
  } catch (error) {
    console.error('Error saving background image:', error);
    alert('Failed to save background image.');
  }
}
</script>

