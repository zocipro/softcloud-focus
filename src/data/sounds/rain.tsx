import {
  BsFillCloudRainFill,
  BsFillCloudRainHeavyFill,
  BsUmbrellaFill,
} from 'react-icons/bs';
import { GiWindow } from 'react-icons/gi';
import { FaLeaf, FaCarSide } from 'react-icons/fa';
import { PiTentFill } from 'react-icons/pi';
import { MdOutlineThunderstorm } from 'react-icons/md';

import type { Category } from '../types';

import { getAssetPath } from '@/helpers/path';

export const rain: Category = {
  icon: <BsFillCloudRainFill />,
  id: 'rain',
  sounds: [
    {
      icon: <BsFillCloudRainFill />,
      id: 'light-rain',
      label: '小雨',
      src: getAssetPath('/sounds/rain/light-rain.mp3'),
    },
    {
      icon: <BsFillCloudRainHeavyFill />,
      id: 'heavy-rain',
      label: '大雨',
      src: getAssetPath('/sounds/rain/heavy-rain.mp3'),
    },
    {
      icon: <MdOutlineThunderstorm />,
      id: 'thunder',
      label: '雷声',
      src: getAssetPath('/sounds/rain/thunder.mp3'),
    },
    {
      icon: <GiWindow />,
      id: 'rain-on-window',
      label: '窗边听雨',
      src: getAssetPath('/sounds/rain/rain-on-window.mp3'),
    },
    {
      icon: <FaCarSide />,
      id: 'rain-on-car-roof',
      label: '雨打车顶',
      src: getAssetPath('/sounds/rain/rain-on-car-roof.mp3'),
    },
    {
      icon: <BsUmbrellaFill />,
      id: 'rain-on-umbrella',
      label: '雨落伞面',
      src: getAssetPath('/sounds/rain/rain-on-umbrella.mp3'),
    },
    {
      icon: <PiTentFill />,
      id: 'rain-on-tent',
      label: '雨落帐篷',
      src: getAssetPath('/sounds/rain/rain-on-tent.mp3'),
    },
    {
      icon: <FaLeaf />,
      id: 'rain-on-leaves',
      label: '雨打树叶',
      src: getAssetPath('/sounds/rain/rain-on-leaves.mp3'),
    },
  ],
  title: '雨声',
};
