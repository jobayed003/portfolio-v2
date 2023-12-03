'use client';

import Hero from '@/components/Layout/Hero';
import Navbar from '@/components/Layout/Navbar';
import Parallax from '@/components/UI/Parallax';
import Portfolio from '@/components/UI/Portfolio';
import Services from '@/components/UI/Services';
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
            <Parallax type='services' />
         </Box>
         <Box id='Services' h='100vh'>
            <Services />
         </Box>
         <Box id='Portfolio' h='100vh'>
            <Parallax type='portfolio' />
         </Box>
         <Box id='Portfolio'>
            <Portfolio />
         </Box>
         <Box id='Contact'>Contact</Box>
         <Box id='About'>About</Box>
      </Box>
   );
}
