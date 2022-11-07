<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import Contact from './components/Contact.vue';
</script>

<template>
  <div>
    <Navbar />
    <RouterView />
    <Contact />
    <Footer />
  </div>
</template>

<style lang="scss">
@import '@/assets/base.css';
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

body {
  background: #f2f2f2;
  color: black;
  margin: 0;
  font-family: 'Poppins';
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

section {
  border: #1a7664 solid 1px;

  img {
    border-bottom: #1a7664 solid 1px;
  }
}
</style>
