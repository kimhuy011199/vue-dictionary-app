<script setup lang="ts">
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import Input from './Input.vue';
import Button from './SearchButton.vue';

const router = useRouter();
const route = useRoute();
const word = route.params.word as string;
const searchInput = ref<string>(word || '');

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
