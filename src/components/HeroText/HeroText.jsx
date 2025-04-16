import css from './HeroText.module.css';
import { motion } from 'framer-motion';

const HeroText = () => {
  return (
    <motion.p
      className={css.heroText}
      initial={{ opacity: 0, visibility: 'hidden', y: 50 }}
      animate={{ opacity: 1, visibility: 'visible', y: 0 }}
      transition={{ delay: 1.2, duration: 0.6, ease: 'easeOut' }}
    >
      Browse through our diverse range of meticulously crafted garments,
      designed to bring out your individuality and cater to your sense of style.
    </motion.p>
  );
};

export default HeroText;
