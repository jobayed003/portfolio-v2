'use client';

import Navbar from '@/components/Layout/Navbar';
import { Box, useColorModeValue } from '@chakra-ui/react';

export default function Home() {
   const bgColor = useColorModeValue('colorMode.dark', 'colorMode.dark');

   return (
      <Box bg={bgColor} height={'100vh'}>
         <Navbar />
      </Box>
   );
}
