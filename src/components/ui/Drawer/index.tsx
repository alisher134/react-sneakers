import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

import styles from './drawer.module.scss';

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export const Drawer: React.FC<Props> = ({ children, isOpen, onClose }) => {
  const portalEl = document.getElementById('modal-root');
  const portalRef = useRef<HTMLElement>(portalEl);
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === overlayRef.current) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '15px';
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = '0';
    };
  }, [isOpen]);

  if (!isOpen || !portalRef.current) return null;

  return ReactDOM.createPortal(
    <div ref={overlayRef} onClick={handleOverlayClick} className={styles.overlay}>
      <div className={styles.drawer}>{children}</div>
    </div>,
    portalRef.current,
  );
};
