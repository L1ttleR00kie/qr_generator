<template>
  <div class="dropdown">
    <button class="flex justify-items-center ml-1 mr-2 mt-1 gap-2 bg-blue-500 hover:bg-blue-700 p-3 rounded-lg shadow-sm text-white"
      @click="toggleDropdown"><b>Download</b><svg class="w-6 text-white h-6 text-gray-800 dark:text-white" aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4" />
      </svg></button>

    <div v-if="showDropdown" id="dropdown" class="absolute right-0 z-10 mt-1 bg-white origin-top-right divide-y divide-gray-100 rounded-lg absolute shadow w-60 dark:bg-gray-700">
      <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
        <li>
          <button href="javascript:void(0)" @click="downloadZip" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white border-b-[1.5px]">Download QR Code Only</button>
        </li>
        <li>
          <button href="javascript:void(0);" @click="downloadWithBackground" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Download with Background Image</button>
        </li>

      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';
import JSZip from 'jszip';

const props = defineProps({
  qrData: Array,
  qrGetName: Array,
  file: Object,
});

const showDropdown = ref(false);

const emits = defineEmits([
  "returnBackgroundImage"
]);

const downloadWithBackground = () => {
  emits("returnBackgroundImage");
};

const downloadZip = async () => {
  try {
    const zip = new JSZip();

    props.qrData.forEach((qrDataURL, index) => {
      const qrName = props.qrGetName[index].replace(/[^\w\s]/gi, '');
      zip.file(`${qrName}.png`, qrDataURL.split(',')[1], { base64: true });
    });
    
    const content = await zip.generateAsync({ type: 'blob' });

    const a = document.createElement('a');
    a.href = URL.createObjectURL(content);
    a.download = `QR_Codes.zip`;
    a.click();
    
  } catch (error) {
    console.error('Error creating zip file:', error);
  }
};

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

</script>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 10px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}</style>