<script setup lang="ts">
import { ref, watch } from 'vue';
import Input from '@/components/Input.vue';
import { useRouteParams } from '@/composables/useRouteParams';
import SearchButton from '@/components/SearchButton.vue';
import { useSearch } from '@/composables/useSearch';

const word = useRouteParams('word');
const searchInput = ref<string>(word?.value || '');
const { search } = useSearch(searchInput);

// Set the search input value when the route param changes
watch(word, (newValue) => {
  searchInput.value = newValue || '';
});
</script>

<template>
  <form class="flex relative w-full" @submit.prevent="search">
    <Input v-model="searchInput" />
    <SearchButton @click="search" />
  </form>
</template>
