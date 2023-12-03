import { Button, Flex, Image, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Cards from '../Util/Cards';

const variants = {
   initial: {
      x: -500,
      y: 100,
      opacity: 0,
   },

   animate: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: { duration: 1, staggerChildren: 0.1 },
   },
};

const Services = () => {
   return (
      <Flex
         as={motion.div}
         variants={variants}
         initial={'initial'}
         whileInView={'animate'}
         bg='linear-gradient(180deg, #0c0c1d, #111132)'
         h='100%'
         flexDir={'column'}
         justify={'space-between'}
      >
         <Flex as={motion.div} flex={'1'} alignSelf={'end'} gap='20px' align={'center'}>
            <Text as='p' color={'gray'} textAlign='right'>
               I focus on helping your brand grow <br /> and move forward
            </Text>
            <hr style={{ width: '500px' }} />
         </Flex>

         <Flex as={motion.div} flex={'2'} align='center' flexDir={'column'} variants={variants}>
            <Flex align={'center'} gap='2rem'>
               <Image
                  alt=''
                  src={'/people.webp'}
                  borderRadius={'50px'}
                  width='300px'
                  height={'100px'}
                  objectFit={'cover'}
               />
               <Text as='h1' fontSize='96px' fontWeight={'100'}>
                  <motion.b whileHover={{ color: 'orange' }}>Unique</motion.b> Ideas
               </Text>
            </Flex>
            <Flex align='center' gap='2rem'>
               <Text as='h1' fontSize='96px' fontWeight={'100'}>
                  <motion.b whileHover={{ color: 'orange' }}>For Your</motion.b> Business.
               </Text>
               <Button
                  sx={{
                     width: '300px',
                     height: '100px',
                     borderRadius: '50px',
                     background: 'orange',
                     border: 'none',
                     fontSize: '24px',
                     color: '#000',
                     _active: { bg: 'orange' },
                     _hover: { bg: 'orange' },
                  }}
               >
                  WHAT WE DO?
               </Button>
            </Flex>
         </Flex>

         <Flex as={motion.div} flex={'2'} maxW={'1400px'} m='auto' variants={variants}>
            {[1, 2, 3, 4].map(() => (
               <Cards
                  title='Branding'
                  desc='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium officiis et laudantium recusandae, rerum dolorum nostrum earum reiciendis odio ipsam ipsum sint tenetur beatae similique exercitationem consequuntur dolore optio inventore?'
                  btnTxt='GO'
                  key={Math.random()}
               />
            ))}
         </Flex>
      </Flex>
   );
};

export default Services;
