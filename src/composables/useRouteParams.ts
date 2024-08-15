import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

export function useRouteParams(name: string) {
  const route = useRoute();
  const param = ref(route.params[name] as string);

  watch(
    () => route.params[name],
    (newValue) => {
      param.value = newValue as string;
    }
  );

  return param;
}
