import { createPortal } from 'react-dom';
import Backdrop from './Backdrop';
import SettingsWindow from './SettingsWindow';

const Modal = () => {
  return createPortal(
    <div className="modal">
      <Backdrop />
      <SettingsWindow />
    </div>,
    document.getElementById('root')!
  );
};

export default Modal;
