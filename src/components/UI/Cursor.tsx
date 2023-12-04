import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Cursor = () => {
   const [position, setPosition] = useState({ x: 0, y: 0 });

   useEffect(() => {
      const mouseMove = (e: MouseEvent) => {
         setPosition({ x: e.clientX, y: e.clientY });
      };

      window.addEventListener('mousemove', mouseMove);
      return () => {
         window.removeEventListener('mousemove', mouseMove);
      };
   }, []);

   return (
      <Box
         display={{ md: 'block', base: 'none' }}
         as={motion.div}
         animate={{ x: position.x + 10, y: position.y + 10 }}
         width='50px'
         height='50px'
         borderRadius='50%'
         border={'1px solid white'}
         position='fixed'
         zIndex={20000}
      ></Box>
   );
};

export default Cursor;
