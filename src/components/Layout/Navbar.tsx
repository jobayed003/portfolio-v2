'use client';

import { Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../UI/Sidebar';
import GridLayout from './GridLayout';

const icons = ['/facebook.png', '/instagram.png', '/youtube.png', '/dribbble.png'];

const Navbar = () => {
   return (
      <>
         <GridLayout>
            <Flex h='100px' align={'center'} justify={'space-between'}>
               <Text fontFamily={'DM Sans'} letterSpacing={'2px'}>
                  JOBAYED
               </Text>
               <Flex gap='1rem'>
                  {icons.map((el) => (
                     <Link key={el} href={'#'}>
                        <Image src={el} width={20} height={20} alt={el} />
                     </Link>
                  ))}
               </Flex>
            </Flex>
         </GridLayout>
         <Sidebar />
      </>
   );
};

export default Navbar;
