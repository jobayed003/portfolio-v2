import { Button, Flex, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

type Props = {
   title: string;
   desc: string;
   btnTxt: string;
};

const Cards = ({ title, desc, btnTxt }: Props) => {
   return (
      <Flex
         as={motion.div}
         whileHover={{ background: 'lightgray', color: '#000' }}
         p='48px'
         flexDir={'column'}
         justify={'space-between'}
         gap='20px'
         border={'1px solid gray'}
      >
         <Text as='h2'>{title}</Text>
         <Text as='p'>{desc}</Text>

         <Button padding={'10px'} bg={'orange'} border={'none'} _active={{ bg: 'orange' }} _hover={{ bg: 'orange' }}>
            {btnTxt}
         </Button>
      </Flex>
   );
};

export default Cards;
