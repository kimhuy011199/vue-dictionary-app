<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Input from './Input.vue';
import Button from './SearchButton.vue';

const router = useRouter();
const searchInput = ref<string>('');

const handleSearch = () => {
  if (searchInput.value) {
    router.push({ name: 'words', params: { word: searchInput.value } });
  }
};
</script>

<template>
  <form class="flex relative w-full" @submit.prevent="handleSearch">
    <Input v-model="searchInput" />
    <Button @click="handleSearch">Submit</Button>
  </form>
</template>
