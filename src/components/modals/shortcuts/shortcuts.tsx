import { Modal, ModalHeader, ModalTitle } from '@/components/modal';

import styles from './shortcuts.module.css';

interface ShortcutsModalProps {
  onClose: () => void;
  show: boolean;
}

export function ShortcutsModal({ onClose, show }: ShortcutsModalProps) {
  const shortcuts = [
    {
      keys: ['Shift', 'H'],
      label: 'Shortcuts List',
    },
    {
      keys: ['Shift', 'Alt', 'P'],
      label: '我的混音',
    },
    {
      keys: ['Shift', 'S'],
      label: '分享混音',
    },
    {
      keys: ['Shift', 'Alt', 'T'],
      label: '睡眠定时',
    },
    {
      keys: ['Shift', 'C'],
      label: '倒计时',
    },
    {
      keys: ['Shift', 'P'],
      label: '番茄钟',
    },
    {
      keys: ['Shift', 'N'],
      label: '记事本',
    },
    {
      keys: ['Shift', 'G'],
      label: '设置',
    },
    {
      keys: ['Shift', 'T'],
      label: '待办清单',
    },
    {
      keys: ['Shift', 'B'],
      label: '呼吸练习',
    },
    {
      keys: ['Shift', 'Space'],
      label: 'Toggle Play',
    },
    {
      keys: ['Shift', 'R'],
      label: '清空声音',
    },
  ];

  return (
    <Modal show={show} onClose={onClose}>
      <ModalHeader>
        <ModalTitle>Keyboard Shortcuts</ModalTitle>
      </ModalHeader>
      <div className={styles.shortcuts}>
        {shortcuts.map(shortcut => (
          <Row
            key={shortcut.label}
            keys={shortcut.keys}
            label={shortcut.label}
          />
        ))}
      </div>
    </Modal>
  );
}

interface RowProps {
  keys: Array<string>;
  label: string;
}

function Row({ keys, label }: RowProps) {
  return (
    <div className={styles.row}>
      <p className={styles.label}>{label}</p>
      <div className={styles.divider} />
      <div className={styles.keys}>
        {keys.map(key => (
          <Key key={`${label}-${key}`}>{key}</Key>
        ))}
      </div>
    </div>
  );
}

interface KeyProps {
  children: React.ReactNode;
}

function Key({ children }: KeyProps) {
  return <div className={styles.key}>{children}</div>;
}
