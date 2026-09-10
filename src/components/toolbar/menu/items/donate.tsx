import { SiBuymeacoffee } from 'react-icons/si';

import { Item } from '../item';

export function Donate() {
  return (
    <Item
      href="https://buymeacoffee.com/remvze"
      icon={<SiBuymeacoffee />}
      label="Buy Me a Coffee"
    />
  );
}
