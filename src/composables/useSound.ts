import { unref, type Ref } from 'vue';

export function useSound(audioUrl: Ref<string> | string) {
  const audio = new Audio(unref(audioUrl));

  const play = () => {
    audio.play();
  };

  return {
    play
  };
}
