<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue';
import NavBar from './components/NavBar.vue';
</script>

<template>
    <NavBar v-if="$route.path !== '/'"/>
  <RouterView/>
  <Footer />
</template>

<style>
body {
  @apply antialiased text-slate-400 bg-slate-900
}
</style>