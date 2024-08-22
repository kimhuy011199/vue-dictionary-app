<script setup lang="ts">
const inputModel = defineModel();
</script>

<template>
  <input
    class="text-black flex h-16 w-full rounded-full border-none bg-background px-8 py-2 text-2xl ring-offset-primary placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
    v-model="inputModel"
    type="text"
    placeholder="Search for a word..."
  />
</template>
