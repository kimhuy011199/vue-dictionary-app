<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { fetchWord } from '@/utils/api';
import { HTTP_Status } from '@/utils/enum';

const route = useRoute();
const word = route.params.word as string;

const result = ref<any>(null);
const isError = ref<boolean>(false);
const isLoading = ref<boolean>(false);
const isNotFound = ref<boolean>(false);

const lookupWord = async () => {
  // Reset states
  isLoading.value = true;
  isNotFound.value = false;
  isError.value = false;
  result.value = null;

  try {
    const data = await fetchWord(word);
    if (data) {
      result.value = data;
    } else {
      isNotFound.value = true;
    }
  } catch (error: any) {
    if (error?.response?.status === HTTP_Status.NOT_FOUND) {
      isNotFound.value = true;
    } else {
      isError.value = true;
    }
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  lookupWord();
});
</script>

<template>
  <main>
    <h1>This is the words page: {{ $route.params.word }}</h1>
  </main>
</template>
