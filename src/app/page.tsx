'use client';

import Hero from '@/components/Layout/Hero';
import Navbar from '@/components/Layout/Navbar';
import { Box, useColorModeValue } from '@chakra-ui/react';

export default function Home() {
   const bgColor = useColorModeValue('colorMode.dark', 'colorMode.dark');

   return (
      <Box bg={bgColor}>
         <Box id='Homepage'>
            <Navbar />
            <Hero />
         </Box>
         <Box id='Services' h='100vh'>
            Services
         </Box>
         <Box id='Portfolio' h='100vh'>
            Parralax
         </Box>
         <Box id='Contact' h='100vh'>
            Contact
         </Box>
         <Box id='About' h='100vh'>
            About
         </Box>
      </Box>
   );
}
