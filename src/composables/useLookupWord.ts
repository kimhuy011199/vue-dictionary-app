import { computed, type Ref } from 'vue';
import { useFetch } from './useFetch';
import { type Word } from '@/utils/type';
import { HttpStatus } from '@/utils/enum';

const DICTIONARY_API = 'https://api.dictionaryapi.dev/api/v2/entries/en';

export function useLookupWord(word: Ref<string>) {
  const url = computed(() => `${DICTIONARY_API}/${word.value}`);
  const { data, error: fetchError, status } = useFetch<Word[]>(url);

  // Transform the data if needed
  const wordData = computed(() => {
    return data.value ? data.value[0] : null;
  });
  const isNotFound = computed(() => {
    return fetchError.value?.response?.status === HttpStatus.NOT_FOUND;
  });
  const error = computed(() => {
    return isNotFound.value ? null : fetchError;
  });

  return { wordData, error, status, isNotFound };
}
