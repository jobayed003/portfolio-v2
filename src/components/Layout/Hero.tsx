import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import GridLayout from './GridLayout';

const textVariants = {
   initial: {
      x: -500,
      opacity: 0,
   },
   animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, staggerChildren: 0.1 },
   },
   scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
         duration: 2,
         repeat: Infinity,
      },
   },
};
const sliderVariants = {
   initial: {
      x: 0,
   },
   animate: {
      x: '-220%',
      transition: {
         repeat: Infinity,
         duration: 20,
      },
   },
};

const Hero = () => {
   const btnstyles = {
      padding: '20px',
      border: '1px solid white',
      background: 'transparent',
   };
   return (
      <Box
         h={'calc(100vh - 100px)'}
         bg='linear-gradient(180deg, #0c0c1d, #111132)'
         overflow={'hidden'}
         pos={'relative'}
      >
         <GridLayout>
            <Flex
               as={motion.div}
               variants={textVariants}
               initial='initial'
               animate={'animate'}
               w='50%'
               h='100%'
               flexDir={'column'}
               gap='40px'
               justify={'center'}
            >
               <Text
                  as={motion.h2}
                  variants={textVariants}
                  color={'rebeccapurple'}
                  fontSize={'30px'}
                  letterSpacing='10px'
               >
                  Jobayed Hossain
               </Text>
               <Text as={motion.h1} variants={textVariants} fontSize={'88px'}>
                  Fullstack Developer
               </Text>
               <Flex gap='.4rem' as={motion.div} variants={textVariants}>
                  <Button sx={btnstyles}>See the latest Works</Button>
                  <Button sx={btnstyles}>Contact Me</Button>
               </Flex>
               <Image
                  as={motion.img}
                  animate={'scrollButton'}
                  variants={textVariants}
                  width={'50px'}
                  src='/scroll.png'
                  alt='CTA Btn'
               />
            </Flex>

            <Box
               as={motion.div}
               variants={sliderVariants}
               initial='initial'
               animate={'animate'}
               pos={'absolute'}
               w='50%'
               fontWeight={'bold'}
               fontSize={'50vh'}
               bottom={'-120'}
               whiteSpace={'nowrap'}
               color={'#ffffff09'}
            >
               Writer Content Creator Influencer
            </Box>
            <Flex h='100%' pos={'absolute'} top={'0'} right={'0'}>
               <Image src={'/hero.png'} alt='hero img' />
            </Flex>
         </GridLayout>
      </Box>
   );
};

export default Hero;
