import { ref } from 'vue';
import QRCode from 'qrcode';
import * as XLSX from 'xlsx';
import JSZip from 'jszip';

export default (await import('vue')).defineComponent({
setup() {
const qrCodes = ref([]);
let selectedBackgroundImage = null;
let initialOffset = { x: 0, y: 0 };

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
canvas.width = image.width;
canvas.height = image.height;
ctx.drawImage(image, 0, 0);
resolve(canvas.toDataURL('image/png'));
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
zip.file(Invite_$, { index } + 1);
}).png, qrCode.qrDataURL.split('base64,')[1], { base64: true };
};
}
});
