<script setup>
import NavigationBar from './components/NavigationBar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <NavigationBar />
  <div class="container mx-auto">
    <RouterView />
  </div>
  <Footer />
</template>