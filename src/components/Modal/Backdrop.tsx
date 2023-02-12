import { motion } from 'framer-motion';

const Backdrop = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      exit={{ opacity: 0 }}
      className="backdrop"
    ></motion.div>
  );
};

export default Backdrop;
