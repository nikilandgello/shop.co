import css from './HeroInfoList.module.css';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: i => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 1.2 + i * 0.3,
      duration: 0.7,
      ease: 'easeOut',
    },
  }),
};

const HeroInfoList = () => {
  return (
    <ul className={css.infoGroup}>
      <motion.li
        className={css.infoItem}
        initial="hidden"
        animate="visible"
        variants={itemVariants}
        style={{ display: 'block' }}
        custom={0}
      >
        <p className={css.infoNumber}>
          <CountUp
            start={0}
            end={200}
            duration={3}
            delay={1.8}
            separator=","
            suffix="+"
          />
        </p>
        <p className={css.infoDescription}>International Brands</p>
      </motion.li>
      <motion.li
        className={css.infoItem}
        initial="hidden"
        animate="visible"
        variants={itemVariants}
        style={{ display: 'block' }}
        custom={1}
      >
        <p className={css.infoNumber}>
          <CountUp
            start={0}
            end={2000}
            duration={3}
            delay={2.2}
            separator=","
            suffix="+"
          />
        </p>
        <p className={css.infoDescription}>High-Quality Products</p>
      </motion.li>
      <motion.li
        className={css.infoItem}
        initial="hidden"
        animate="visible"
        variants={itemVariants}
        style={{ display: 'block' }}
        custom={2}
      >
        <p className={css.infoNumber}>
          <CountUp
            start={0}
            end={30000}
            duration={4}
            delay={2.6}
            separator=","
            suffix="+"
          />
        </p>
        <p className={css.infoDescription}>Happy Customers</p>
      </motion.li>
    </ul>
  );
};

export default HeroInfoList;
