import { isRef, ref, unref, watch, type Ref } from 'vue';
import axios from 'axios';
import { FetchStatus } from '@/utils/enum';

export function useFetch<T>(url: Ref<string> | string) {
  const data = ref<T | null>(null);
  const error = ref<any>(null);
  const status = ref<FetchStatus>(FetchStatus.IDLE);

  const fetchData = async () => {
    status.value = FetchStatus.FETCHING;
    data.value = null;
    error.value = null;

    try {
      const res = await axios.get(unref(url));
      data.value = res.data;
      status.value = FetchStatus.RESOLVED;
    } catch (err) {
      error.value = err;
      status.value = FetchStatus.REJECTED;
    }
  };

  if (isRef(url)) {
    watch(url, () => {
      fetchData();
    });
  }

  fetchData();

  return { data, error, status };
}
