<template>
  <div>
    <Hero />
    <About />
    <Skills />
    <Daytistics />
    <Contact />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  title: 'Home',
  description: 'This is the home page',
  image: '/images/home.jpg',
  url: 'https://example.com',
  type: 'website',
  keywords: 'home, page, website',
});
</script>

<style></style>