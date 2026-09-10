import { Modal, ModalHeader, ModalTitle } from '@/components/modal';
import { New } from './new';
import { List } from './list';

import styles from './presets.module.css';

interface PresetsModalProps {
  onClose: () => void;
  show: boolean;
}

export function PresetsModal({ onClose, show }: PresetsModalProps) {
  return (
    <Modal show={show} onClose={onClose}>
      <ModalHeader>
        <ModalTitle>我的混音</ModalTitle>
      </ModalHeader>
      <New />
      <div className={styles.divider} />
      <List close={onClose} />
    </Modal>
  );
}
