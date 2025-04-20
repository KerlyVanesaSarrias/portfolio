// components/AnimatedCard.tsx
import { motion } from 'framer-motion';

const variants = {
  hiddenLeft: { opacity: 0, x: -100 },
  hiddenRight: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

// eslint-disable-next-line react/prop-types
const AnimatedCard = ({ children, direction = 'left' }) => {
  return (
    <motion.div
      initial={direction === 'left' ? 'hiddenLeft' : 'hiddenRight'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
