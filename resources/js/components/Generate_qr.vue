<template>
  <div>
    <div class="flex flex-col items-center justify-center">
      <div class="flex items-center justify-center w-full p-4">
        <select_file v-model="file" @update:modelValue="handleFileChange"/>
        <background_image v-model="image" @update:modelValue="handleImageChange"/>
        <download_zip :qrDataUrls="qrDataUrls" :file="file" :qrGetName="qrGetName"/>
      </div>
        <div class="flex flex-wrap">
          <div v-for="(qrDataURL, index) in qrDataUrls" :key="index" class="box-border w-50 p-5">
            <img :src="qrDataURL" alt="QR Code" class="w-20" />
          </div>
        </div>
      </div>
    
  </div>
</template>

<script setup>
import { ref } from 'vue'
import select_file from './select_file.vue'
import download_zip from './download_zip.vue'
import background_image from './background_image.vue';
import QRCode from 'qrcode'
import * as XLSX from 'xlsx'

const file = ref(null)
const qrDataUrls = ref([])
const qrGetName = ref([])
const image = ref(null);

const handleFileChange = async (file) => {
  if (!file) {
    console.error('No file selected.')
    return
  }
  
  const fileReader = new FileReader()

  fileReader.onload = (e) => {
    const data = new Uint8Array(e.target.result);
    const workbook = XLSX.read(data, { type: 'array' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
    generateQRCodeForEachEntry(jsonData.slice(1));
  };
  
  fileReader.readAsArrayBuffer(file)
}

const generateQRCodeForEachEntry = async (dataEntries) => {
  try {
    const qrDataUrlsArray = await Promise.all(dataEntries.map(async (row) => {
      const contentString = JSON.stringify(row[1]);
      return await QRCode.toDataURL(contentString);
    }));
    qrDataUrls.value = qrDataUrlsArray;

    const qrDataNameArray = await Promise.all(dataEntries.map(async (row) => {
      return JSON.stringify(row[0]);
    }));
    qrGetName.value = qrDataNameArray;

  } catch (error) {
    console.error('Error generating QR codes:', error);
  }
}

const backgroundImage = ref(null);

  const handleImageChange = (image) => {
    backgroundImage.value = image;
    return backgroundImage
  };
</script>
