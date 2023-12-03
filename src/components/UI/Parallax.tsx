import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Parallax = ({ type }: { type: string }) => {
   const containerRef = useRef(null);

   const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ['start start', 'end start'],
   });

   const yBG = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
   const yText = useTransform(scrollYProgress, [0, 1], ['0%', '500%']);

   return (
      <Flex
         bg={
            type === 'services'
               ? 'linear-gradient(180deg, #111132 , #0c0c1d)'
               : 'linear-gradient(180deg, #111132 , #505064)'
         }
         w='100%'
         h='100%'
         pos={'relative'}
         justify={'center'}
         align={'center'}
         ref={containerRef}
         overflow={'hidden'}
      >
         <Text as={motion.h1} fontSize={'100px'} fontWeight={'bold'} pos={'absolute'} style={{ y: yText }}>
            {type === 'services' ? 'What I Do?' : 'What I Did?'}
         </Text>
         <Box as={motion.div} pos={'absolute'} zIndex={3}>
            <Image src={'/mountains.png'} alt='mountains' />
         </Box>
         <Box as={motion.div} pos={'absolute'} zIndex={2} style={{ y: yBG }}>
            <Image src={`/${type === 'services' ? 'planets' : 'sun'}.png`} alt='planets img' />
         </Box>
         <Box as={motion.div} pos={'absolute'} zIndex={1} style={{ x: yBG }}>
            <Image src={'/stars.png'} alt='star img' />
         </Box>
      </Flex>
   );
};

export default Parallax;
