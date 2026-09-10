import { RiPlayListFill } from 'react-icons/ri';

import { Item } from '../item';

interface PresetsProps {
  open: () => void;
}

export function Presets({ open }: PresetsProps) {
  return (
    <Item
      icon={<RiPlayListFill />}
      label="我的混音"
      shortcut="Shift + Alt + P"
      onClick={open}
    />
  );
}
