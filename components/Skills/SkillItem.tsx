import { FC } from 'react';
import { motion } from 'framer-motion';

interface SkillItemProps {
  directionLeft?: boolean;
}

const SkillItem: FC<SkillItemProps> = ({ directionLeft }) => {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className='rounded-full border border-gray-500 object-cover w-24 h-24'
      />
    </div>
  );
};

export default SkillItem;
