import { GiSoundWaves } from 'react-icons/gi';
import { BsSoundwave } from 'react-icons/bs';

import type { Category } from '../types';

import { getAssetPath } from '@/helpers/path';

export const noise: Category = {
  icon: <BsSoundwave />,
  id: 'noise',
  sounds: [
    {
      icon: <GiSoundWaves />,
      id: 'white-noise',
      label: '白噪声',
      src: getAssetPath('/sounds/noise/white-noise.wav'),
    },
    {
      icon: <GiSoundWaves />,
      id: 'pink-noise',
      label: '粉红噪声',
      src: getAssetPath('/sounds/noise/pink-noise.wav'),
    },
    {
      icon: <GiSoundWaves />,
      id: 'brown-noise',
      label: '棕噪声',
      src: getAssetPath('/sounds/noise/brown-noise.wav'),
    },
  ],
  title: '噪声',
};
