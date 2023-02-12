import { motion } from 'framer-motion';

const Notification = () => {
  return (
    <motion.div
      initial={{ x: '-50%', y: '100%' }}
      animate={{ x: '-50%', y: '-50%' }}
      exit={{ x: '-50%', y: '100%' }}
      transition={{ type: 'tween', duration: 0.7, ease: 'backOut' }}
      className="notification"
    >
      <p>O cronômetro está funcionando. Pause para trocar o modo.</p>
    </motion.div>
  );
};

export default Notification;
