<script setup lang="ts">
import SearchBar from '@/components/SearchBar.vue';
</script>

<template>
  <main class="flex flex-col items-center justify-center my-auto z-10 px-5">
    <div class="flex flex-col">
      <p class="text-center text-3xl font-semibold pb-4">English Dictionary</p>
      <p class="text-center text-5xl font-bold pb-8 px-3 leading-tight">"One Word, One Wiki"</p>
      <SearchBar />
    </div>
  </main>
</template>
