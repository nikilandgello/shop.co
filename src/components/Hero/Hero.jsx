import css from './Hero.module.css';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import HeroTitle from '../HeroTitle/HeroTitle';
import HeroButton from '../HeroButton/HeroButton';
import HeroText from '../HeroText/HeroText';
import HeroInfoList from '../HeroInfoList/HeroInfoList';

const Hero = () => {
  return (
    <section className={css.headerSection}>
      <div className={clsx('container', css.headerContainer)}>
        <HeroTitle />
        <HeroText />
        <HeroButton />
        <HeroInfoList />

        <motion.svg
          initial={{ opacity: 0, scale: 0, rotate: 360 }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
              delay: 6,
              type: 'spring',
              stiffness: 350,
              damping: 50,
            },
          }}
          whileInView={{
            scale: [1, 0.7, 1],
            transition: {
              repeat: Infinity,
              duration: 2,
              ease: 'easeInOut',
              delay: 8,
            },
          }}
          className={css.firstStar}
          width={104}
          height={104}
        >
          <use href="/public/sprite.svg#icon-star"></use>
        </motion.svg>
        <motion.svg
          initial={{ opacity: 0, scale: 0, rotate: -360 }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
              delay: 6,
              type: 'spring',
              stiffness: 500,
              damping: 50,
            },
          }}
          whileInView={{
            scale: [1, 0.7, 1],
            transition: {
              repeat: Infinity,
              duration: 2,
              ease: 'easeInOut',
              delay: 7,
            },
          }}
          className={css.secondStar}
          width={56}
          height={56}
        >
          <use href="/public/sprite.svg#icon-star"></use>
        </motion.svg>
      </div>
    </section>
  );
};

export default Hero;
