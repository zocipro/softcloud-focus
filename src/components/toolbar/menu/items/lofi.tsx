import { IoIosMusicalNote } from 'react-icons/io';

import { Item } from '../item';

interface LofiProps {
  open: () => void;
}

export function Lofi({ open }: LofiProps) {
  return (
    <Item
      icon={<IoIosMusicalNote />}
      label="轻音乐播放器"
      onClick={open}
    />
  );
}
