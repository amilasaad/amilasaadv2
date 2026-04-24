import useSound from 'use-sound';

const CLICK_SFX = 'https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3';
const HOVER_SFX = 'https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3';
const SUCCESS_SFX = 'https://assets.mixkit.co/active_storage/sfx/2592/2592-preview.mp3';
const MESSAGE_SFX = 'https://assets.mixkit.co/active_storage/sfx/2354/2354-preview.mp3';
const MUSIC_URL = 'https://cdn.pixabay.com/audio/2022/01/21/audio_31743c589f.mp3';

export function useInteractionSounds() {
  const [playClick] = useSound(CLICK_SFX, { volume: 0.5 });
  const [playHover] = useSound(HOVER_SFX, { volume: 0.2 });
  const [playSuccess] = useSound(SUCCESS_SFX, { volume: 0.5 });
  const [playMessage] = useSound(MESSAGE_SFX, { volume: 0.4 });

  return {
    playClick,
    playHover,
    playSuccess,
    playMessage,
    MUSIC_URL
  };
}
