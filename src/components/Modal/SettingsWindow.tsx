import { useAppDispatch } from '../../store/hooks';
import { changeSettingsModalState } from '../../store/modalSlice';
import Icon from '../Icon/Icon';
import Button from '../UI/Button';
import SettingsForm from './SettingsForm';
import { motion } from 'framer-motion';

const SettingsWindow = () => {
  const dispatch = useAppDispatch();

  const onCloseModalHandler = () => {
    dispatch(changeSettingsModalState());
  };

  return (
    <motion.section
      initial={{ x: '-50%', y: 'calc(100vh - 50%)' }}
      animate={{ x: '-50%', y: '-50%' }}
      exit={{ x: '-50%', y: 'calc(100vh - 50%)' }}
      transition={{ type: 'tween', duration: 0.7, ease: 'backOut' }}
      className="settingsWindow"
    >
      <header className="settingsWindowHeader">
        <h2>Configurações</h2>
        <Button onClick={onCloseModalHandler}>
          <Icon closeIcon />
        </Button>
      </header>
      <SettingsForm />
    </motion.section>
  );
};

export default SettingsWindow;
