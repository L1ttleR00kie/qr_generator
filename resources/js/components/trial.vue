<template>
    <div class="p-4">
        <div v-if="success != ''" id="alert-border-3" class="flex items-center p-4 mb-4 text-green-800 border-t-4 border-green-300 bg-green-50 dark:text-green-400 dark:bg-gray-800 dark:border-green-800" role="alert">
            <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
            </svg>
            <div class="ms-3 text-sm font-medium">
              Success <a href="#" class="font-semibold underline hover:no-underline">example link</a>. Give it a click if you like.
            </div>
            <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700"  data-dismiss-target="#alert-border-3" aria-label="Close">
              <span class="sr-only">Dismiss</span>
              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
            </button>
        </div>

        <div class="flex flex-col items-center justify-center ">
            <div class="flex items-center justify-center w-full p-4">
                <label for="dropzone-file" class="flex items-center text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg px-5 py-2.5 me-2 mb-2">
                    <div class="flex flex-col items-center justify-center pt-2 pb-2 pl-2 pr-2">
                        <svg class="w-8 h-8 mB2 text-gray-500 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                        </svg>
                        <p class="text-xs text-gray-500 text-white"><strong>Upload File</strong></p>
                    </div>
                    <input id="dropzone-file" type="file" class="hidden" @change="handleFileUpload" />
                </label>

                <button @click="downloadZip" type="button" class="flex items-center text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                Download QR Codes as ZIP
                <svg class="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4" />
                </svg>
                </button>
                <!-- <form @submit.prevent="saveBackgroundImage" enctype="multipart/form-data">
                  <input type="file" accept="image/*" v-model="backgroundImage" @change="onChange">
                  <button type="submit" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Save Background Image</button>
                </form> -->
                

                <form @submit="formSubmit" enctype="multipart/form-data">
                    <input type="file" class="form-control" v-on:change="onChange" hidden>
                    <button @click="chooseBackgroundImage" type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" >Choose Background Image</button>
                </form>

                <button @click="downloadWithBackground" type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Download with Background</button>
            </div>
            
            <div class="w-100">
                <div ref="domToCapture" v-if="qrCodes.length > 0"  class="bg-blue-200  w-100 grid grid-cols-3">
                    <div v-for="(qrCode, index) in qrCodes" :key="index" class="relative inline mx-2 my-2">

                    <img :src="qrCode.backgroundImage" alt="Background">


                        <div class="qr-code" 
                            :style="{ 
                                left: qrCode.position.x + 'px', 
                                top: qrCode.position.y + 'px', 
                                transform: `scale(${qrCode.scale || 1})`,
                                width: qrCode.backgroundWidth + 'px',
                                height: qrCode.backgroundHeight + 'px'
                            }"
                            @mousedown="handleMouseDown($event, index)"
                            @mouseup="handleMouseUp($event, index)"
                            @wheel.prevent="handleMouseScroll($event, index)">
                            <img :src="qrCode.qrDataURL" alt="QR Code" class="qr-image w-20 h-20">
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
  
      
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import QRCode from 'qrcode';
  import * as XLSX from 'xlsx';
  import JSZip from 'jszip';
  import html2canvas from 'html2canvas';
  import axios from 'axios';
  
  export default {
    setup() {
      const qrCodes = ref([]);
      let selectedBackgroundImage = null;
      let initialOffset = { x: 0, y: 0 };
      const domToCapture = ref(null);

      const name = ref('');
      const image = ref('');
      const success = ref('');
  
      const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        const fileData = await parseExcel(file);
  
        const qrCodePromises = fileData.map(async (row) => {
          const textData = JSON.stringify(row[1]);
          const qrDataURL = await generateQRCode(textData);
          return { qrDataURL, position: { x: 0, y: 0 }, scale: 1 }; // Add a scale property
        });
  
        qrCodes.value = await Promise.all(qrCodePromises);
      };
  
      const parseExcel = (file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = (e) => {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
            resolve(jsonData.slice(1));
          };
          reader.onerror = (error) => {
            reject(error);
          };
          reader.readAsArrayBuffer(file);
        });
      };
  
      const generateQRCode = async (textData) => {
        try {
          const qrDataURL = await QRCode.toDataURL(textData);
          return qrDataURL;
        } catch (error) {
          console.error('Error generating QR code:', error);
        }
      };
  
      const chooseBackgroundImage = async () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = async (event) => {
          selectedBackgroundImage = event.target.files[0];
          await addBackgroundImage();
        };
        input.click();
      };

      const onChange = (e) => {
        image.value = e.target.files[0];
      };

      const formSubmit = () => {
        const data = new FormData();
        data.append('image', image.value);
        
        axios
          .post('/upload', data, config)
          .then((res) => {
            success.value = res.data.success;
          })
          .catch((err) => {
            console.error(err);
          });
      };
  
      const addBackgroundImage = async () => {
        for (let i = 0; i < qrCodes.value.length; i++) {
          const qrCode = qrCodes.value[i];
          if (selectedBackgroundImage) {
            qrCode.backgroundImage = await mergeBackground(selectedBackgroundImage);
          }
        }
        // Ensure reactivity by creating a new array reference
        qrCodes.value = [...qrCodes.value];
      };
  
      const mergeBackground = (backgroundImage) => {
        return new Promise((resolve, reject) => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          const image = new Image();
  
          image.onload = () => {
            console.log(image.height)
            canvas.width = image.width;
            canvas.height = image.height;
            ctx.drawImage(image, 0, 0);
            resolve(canvas.toDataURL('image/png'));

            
      
            document.querySelectorAll(".imgbg").forEach((i)=>{
               // console.log(i)
               
                    i.style.width = image.width+"px";
                    i.style.height = image.height+"px";
           })

          };
  
          image.onerror = (error) => {
            console.error('Error loading background image:', error);
            reject(error);
          };
  
           image.src = URL.createObjectURL(backgroundImage);
         

        });
      };
  
      const downloadZip = async () => {
        const zip = new JSZip();
        qrCodes.value.forEach((qrCode, index) => {
          zip.file(`Invite_${index + 1}.png`, qrCode.qrDataURL.split('base64,')[1], { base64: true });
        });
        const content = await zip.generateAsync({ type: 'blob' });
        const zipFile = new File([content], 'QR_Codes.zip', { type: 'application/zip' });
        const url = URL.createObjectURL(zipFile);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'QR_Codes.zip');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
  
      const downloadWithBackground = async () => {
            if (!domToCapture.value) {
                console.error("Error: domToCapture is null.");
                return;
            }

            const zip = new JSZip();
            for (let i = 0; i < qrCodes.value.length; i++) {
                const qrCode = qrCodes.value[i];
                if (qrCode.backgroundImage) {
                    const qrCodeElement = domToCapture.value.children[i];
                    const canvas = await html2canvas(qrCodeElement);
                    const imageData = canvas.toDataURL('image/png').split('base64,')[1];
                    zip.file(`Invite_${i + 1}_with_background.png`, imageData, { base64: true });
                }
            }

            const content = await zip.generateAsync({ type: 'blob' });
            const zipFile = new File([content], 'QR_Codes_with_Background.zip', { type: 'application/zip' });
            const url = URL.createObjectURL(zipFile);
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'QR_Codes_with_Background.zip');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        };
  
      const handleMouseDown = (event, index) => {
        startDrag(event, index);
      };
  
      const handleMouseUp = (event, index) => {
        endDrag()
      };
  
      const startDrag = (event, index) => {
        initialOffset.x = event.clientX - qrCodes.value[index].position.x;
        initialOffset.y = event.clientY - qrCodes.value[index].position.y;
  
        document.addEventListener('mousemove', handleDrag);
        document.addEventListener('mouseup', endDrag);
      };
  
      const handleDrag = (event) => {
        qrCodes.value.forEach((qrCode, index) => {
          qrCode.position.x = event.clientX - initialOffset.x;
          qrCode.position.y = event.clientY - initialOffset.y;
        });
      };
  
      const endDrag = () => {
        document.removeEventListener('mousemove', handleDrag);
        document.removeEventListener('mouseup', endDrag);
      };
  
      const handleMouseScroll = (event, index) => {
    const delta = Math.sign(event.deltaY); // Get the direction of scroll
    const scaleFactor = 1.1; // Adjust this value to control the scale factor
    const qrCode = qrCodes.value[index];
    qrCode.scale = qrCode.scale || 1; // Initialize scale if not set
  
    if (delta > 0) {
      qrCode.scale /= scaleFactor; // Decrease scale on scroll down
    } else {
      qrCode.scale *= scaleFactor; // Increase scale on scroll up
    }
  
    // Update the style to reflect the new scale for all QR codes
    qrCodes.value.forEach((code) => {
      code.scale = qrCode.scale;
    });
  
    // Ensure reactivity by creating a new array reference
    qrCodes.value = [...qrCodes.value];
  };
  
      onMounted(() => {
        const qrImages = document.getElementsByClassName('qr-image');
        for (let i = 0; i < qrImages.length; i++) {
          qrImages[i].style.position = 'absolute';
        }
        domToCapture.value = document.querySelector('.flex-wrap');
      });
  
      return {
        handleFileUpload,
        qrCodes,
        downloadZip,
        chooseBackgroundImage,
        downloadWithBackground,
        handleMouseDown,
        handleMouseUp,
        domToCapture,
        handleMouseScroll,
        name,
        image,
        success,
        onChange,
        formSubmit
      };
    }
  };
  </script>
  
  <style>
  .row-container {
    display: flex;
    flex-wrap: wrap;
  }
  
  /* .qr-container {
    display: inline-block;
  } */
  
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
    /* width: 100px;
    height: 100px; */
    pointer-events: none;
  
  }
  
  .doms{
    background-repeat: no-repeat;
    object-fit: cover;
  }
  </style>