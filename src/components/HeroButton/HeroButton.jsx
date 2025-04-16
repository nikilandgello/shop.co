import css from './HeroButton.module.css';
import { motion } from 'framer-motion';

const HeroButton = () => {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: {
          delay: 6,
          type: 'spring',
          stiffness: 350,
          damping: 20,
        },
      }}
      whileHover={{
        y: -4,
        scale: 1.05,
        transition: {
          type: 'spring',
          stiffness: 500,
          damping: 10,
        },
      }}
      whileTap={{
        scale: 0.9,
        transition: {
          type: 'spring',
          stiffness: 500,
          damping: 12,
        },
      }}
      className={css.buttonShopNow}
    >
      Shop Now
    </motion.button>
  );
};

export default HeroButton;
