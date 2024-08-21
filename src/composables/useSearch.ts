import { ref, type Ref } from 'vue';
import { useRouter } from 'vue-router';

export function useSearch(word: Ref<string>) {
  const router = useRouter();

  const search = () => {
    if (word.value) {
      router.push({ name: 'words', params: { word: word.value } });
    }
  };

  return {
    search
  };
}
