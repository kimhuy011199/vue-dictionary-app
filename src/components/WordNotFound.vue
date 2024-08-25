<script setup lang="ts">
defineProps<{
  word: string;
}>();
</script>

<template>
  <div class="flex w-full mt-5 justify-center items-center">
    <div class="text-xl">
      <span>No results found:&nbsp;</span>
      <span class="text-3xl font-semibold">{{ word }}</span>
    </div>
  </div>
</template>
