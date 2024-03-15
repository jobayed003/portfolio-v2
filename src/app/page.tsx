'use client';

import Hero from '@/components/Layout/Hero';
import Navbar from '@/components/Layout/Navbar';
import Contact from '@/components/UI/Contact';
import Cursor from '@/components/UI/Cursor';
import Parallax from '@/components/UI/Parallax';
import Portfolio from '@/components/UI/Portfolio';
import Services from '@/components/UI/Services';
import { Box, useColorModeValue } from '@chakra-ui/react';

export default function Home() {
  const bgColor = useColorModeValue('colorMode.dark', 'colorMode.dark');

  return (
    <Box bg={bgColor}>
      <Cursor />
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
      <Box id='Portfolio'>
        <Parallax type='portfolio' />
      </Box>
      <Box id='Portfolio'>
        <Portfolio />
      </Box>
      <Box id='Contact' h='auto' mt='4rem' p='2rem'>
        <Contact />
      </Box>
    </Box>
  );
}
