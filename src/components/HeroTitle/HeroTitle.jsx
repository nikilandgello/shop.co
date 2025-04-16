import css from './HeroTitle.module.css';
import { motion } from 'framer-motion';

const animateTitle = {
  hidden: { opacity: 0, y: 50 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.9,
      ease: 'easeOut',
    },
  }),
};

const HeroTitle = () => {
  return (
    <h1 className={css.heroTitle}>
      <motion.span
        initial="hidden"
        animate="visible"
        variants={animateTitle}
        style={{ display: 'block' }}
        custom={0}
      >
        FIND CLOTHES
      </motion.span>
      <motion.span
        initial="hidden"
        animate="visible"
        variants={animateTitle}
        style={{ display: 'block' }}
        custom={1}
      >
        THAT MATCHES
      </motion.span>
      <motion.span
        initial="hidden"
        animate="visible"
        variants={animateTitle}
        style={{ display: 'block' }}
        custom={2}
      >
        YOUR STYLE
      </motion.span>
    </h1>
  );
};

export default HeroTitle;
