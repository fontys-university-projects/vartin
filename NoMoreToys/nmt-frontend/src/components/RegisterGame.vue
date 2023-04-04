<template>
    <div>
      <button @click="scanQRCode" class="rounded-md bg-white/10 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-white/20">Scan QR Code</button>
      <video ref="video" autoplay v-show="stream"></video>
      <div v-if="barcodes.length > 0">
        <h2>Barcodes detected:</h2>
        <ul>
          <li v-for="(barcode, index) in barcodes" :key="index">
            <p>Value: {{ barcode.rawValue }}</p>
            <p>Type: {{ barcode.format }}</p>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        stream: null,
        barcodes: [],
      };
    },
    methods: {
      async scanQRCode() {
        this.stream = await navigator.mediaDevices.getUserMedia({ video: true });
        this.$refs.video.srcObject = this.stream;
        const barcodes = await detectBarcodes(this.$refs.video);
        this.barcodes = barcodes;
      },
    },
    beforeDestroy() {
      if (this.stream) {
        this.stream.getTracks().forEach((track) => track.stop());
      }
    },
  };
  
  async function detectBarcodes(image) {
    const barcodeDetector = new BarcodeDetector();
    const barcodes = await barcodeDetector.detect(image);
    return barcodes;
  }
  </script>