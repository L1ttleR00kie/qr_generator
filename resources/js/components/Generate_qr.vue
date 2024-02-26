<template>
  <div ref="backgroundIMageDom" class="backgroundImageDom">
    <div class="flex flex-col items-center justify-center">
      <div class="flex items-center justify-center w-full p-4">
        <select_file v-model="file" @update:modelValue="handleFileChange" />
        <background_image @ReturnPath="(res)=>{returnPath(res)}"/>
          <input type="number" v-model="imageWidth" placeholder="Width (Inch)">
        <download_zip :qrData="qrData" :qrGetName="qrGetName" :file="file" :domToCapture="domToCapture" @returnBackgroundImage="()=>{downloadWithBackground()}" />
      </div>

      

      <div class="w-100">
        <div v-if="downloadPercentage != 0">
          <div class="flex justify-between mb-1">
            <span class="text-base font-medium text-blue-700">Download Progress</span>
            <span class="text-sm font-medium text-blue-700">{{ downloadPercentage }}%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2.5">
            <div class="bg-blue-600 h-2.5 rounded-full" :style="{ width: downloadPercentage + '%' }"></div>
          </div>
        </div>
      </div>

      <div class="w-100">
        <div ref="domToCapture" v-if="qrDataUrls.length > 0" class=" domToCapture bg-blue-200 w-100 grid grid-cols-3">
          <div v-for="(qrDataURL, index) in qrDataUrls" :key="index" class="relative inline mx-2 my-2">
            <img :src="savedBackgroundImagePath" alt="Background">

            <div class="qr-code absolute bg-contain cursor-pointer"
              :style="{ top: qrDataURL.position.y + 'px', left: qrDataURL.position.x + 'px', transform: `scale(${qrDataURL.scale || 1})`, width: qrDataURL.backgroundWidth + 'px', height: qrDataURL.backgroundHeight + 'px' }"
              @mousedown="handleMouseDown($event, index)" @mouseup="handleMouseUp($event, index)"
              @wheel.prevent="handleMouseScroll($event, index)">
              <img :src="qrDataURL.url" alt="QR Code" class="qr-image relative w-20 h-20">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import select_file from './select_file.vue'
import download_zip from './download_zip.vue'
import background_image from './background_image.vue'
import QRCode from 'qrcode'
import * as XLSX from 'xlsx'
import html2canvas from 'html2canvas';
import JSZip from 'jszip';

const file = ref(null)
const qrDataUrls = ref([])
const qrData = ref([])
const qrGetName = ref([])
const domToCapture = ref(null);
const savedBackgroundImagePath = ref('')
const initialOffset = ref({ x: 0, y: 0 })
const backgroundIMageDom = ref(null)
const downloadPercentage = ref(0)
const imageWidth = ref(null);


const handleFileChange = async (file) => {
  if (!file) {
    console.error('No file selected.')
    return
  }

  const fileReader = new FileReader()

  fileReader.onload = (e) => {
    const data = new Uint8Array(e.target.result)
    const workbook = XLSX.read(data, { type: 'array' })
    const sheetName = workbook.SheetNames[0]
    const worksheet = workbook.Sheets[sheetName]
    const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 })
    generateQRCodeForEachEntry(jsonData.slice(1))
  }

  fileReader.readAsArrayBuffer(file)
}

const generateQRCodeForEachEntry = async (dataEntries) => {
  try {
    const qrDataUrlsArray = await Promise.all(dataEntries.map(async (row) => {
      const contentString = JSON.stringify(row[1])
      const url = await QRCode.toDataURL(contentString)
      return { url, position: { x: 0, y: 0 } }
    }))

    qrDataUrls.value = qrDataUrlsArray

    const qrDataArray = await Promise.all(dataEntries.map(async (row) => {
      const contentString = JSON.stringify(row[1]);
      return await QRCode.toDataURL(contentString);
    }));
    qrData.value = qrDataArray

    const qrDataNameArray = dataEntries.map((row) => JSON.stringify(row[0]))
    qrGetName.value = qrDataNameArray
  } catch (error) {
    console.error('Error generating QR codes:', error)
  }
}

const returnPath = (res) => {
  savedBackgroundImagePath.value = res
}

const getBackgroundImage = () => {
  axios.get('/backgroundImage-path')
    .then((response) => {

      savedBackgroundImagePath.value = response.data.path
      console.log()
    })
    .catch((error) => {
      console.error('Error getting background image:', error)
    })
}

const handleMouseDown = (event, index) => {
  startDrag(event, index);
};

const handleMouseUp = (event, index) => {
  endDrag()
};

const startDrag = (event, index) => {
  initialOffset.value.x = event.clientX - qrDataUrls.value[index].position.x
  initialOffset.value.y = event.clientY - qrDataUrls.value[index].position.y

  document.addEventListener('mousemove', handleDrag);
  document.addEventListener('mouseup', endDrag);
}

const handleDrag = (event) => {
  qrDataUrls.value.forEach((qrDataUrl, index) => {
    qrDataUrl.position.x = event.clientX - initialOffset.value.x
    qrDataUrl.position.y = event.clientY - initialOffset.value.y
  })
}

const endDrag = () => {
  document.removeEventListener('mousemove', handleDrag);
  document.removeEventListener('mouseup', endDrag);
}

const handleMouseScroll = (event, index) => {
  const delta = Math.sign(event.deltaY); 
  const scaleFactor = 1.1; 
  const qrDataUrl = qrDataUrls.value[index];
  qrDataUrl.scale = qrDataUrl.scale || 1; 

  if (delta > 0) {
    qrDataUrl.scale /= scaleFactor; 
  } else {
    qrDataUrl.scale *= scaleFactor; 
  }

  
  qrDataUrls.value.forEach((code) => {
    code.scale = qrDataUrl.scale;
  });

  
  qrDataUrls.value = [...qrDataUrls.value];
};



onMounted(()=>{
  getBackgroundImage()
  nextTick().then(()=>{
    backgroundIMageDom.value.addEventListener("returnPath",(d)=>{
      returnPath(d.detail.imagepath)
    })
  })

})

onMounted(() => {
  const qrImages = document.getElementsByClassName('qr-image');
  for (let i = 0; i < qrImages.length; i++) {
    qrImages[i].style.position = 'absolute';
  }
})

const downloadWithBackground = async () => {
  try {
    if (!domToCapture.value || !imageWidth.value) {
      console.error("Error: domToCapture or dimensions are null.");
      return;
    }

    


    
    const dpi = 96;

    const zip = new JSZip();
    let filesProcessed = 0;
    const totalFiles = qrData.value.length;

    for (let i = 0; i < qrData.value.length; i++) {
      const qrCode = qrData.value[i];
      if (qrCode) {
        const qrCodeElement = domToCapture.value.children[i];
        const canvas = await html2canvas(qrCodeElement);
        const imageData = canvas.toDataURL('image/png');

        const widthInInches = imageWidth.value;

        const widthInPixels = widthInInches * dpi;

        const image = new Image();
        image.src = imageData;

        image.width = widthInPixels;

        const adjustedImageData = await getImageBase64(image);

        zip.file(`captured_content_${i}.png`, adjustedImageData, { base64: true });
        filesProcessed++;
        downloadPercentage.value = Math.floor((filesProcessed / totalFiles) * 100);
        if (filesProcessed === totalFiles) {
          nextTick(() => {
            downloadPercentage.value = 0; 
          });
        }
      }
    }

    const content = await zip.generateAsync({ type: 'blob' });
    const zipFile = new File([content], 'Captured_Content.zip', { type: 'application/zip' });

    const url = URL.createObjectURL(zipFile);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Captured_Content.zip');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error('Error capturing and downloading:', error);
  }
};

const getImageBase64 = (image) => {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    let aspectRatio = document.querySelector(".domToCapture img[alt='Background']").getBoundingClientRect().width / image.width
    let h = document.querySelector(".domToCapture img[alt='Background']").getBoundingClientRect().height / aspectRatio


    canvas.width = image.width;
    // canvas.height = image.height;
    // context.drawImage(image, 0, 0, image.width, image.height);
    canvas.height = h;
    context.drawImage(image, 0, 0, image.width, h);

    canvas.toBlob((blob) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result.split(',')[1]);
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    }, 'image/png');
  });
};



</script>

<style>


.qr-code {
  position: absolute;
  margin: 10px;
  width: 5rem;
  height: 5rem;
  background-size: contain;
  cursor: pointer;
}

.qr-image {
  position: relative;
  pointer-events: none;
}


</style>
