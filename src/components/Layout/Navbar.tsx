'use client';

import { Flex, Text } from '@chakra-ui/react';
import GridLayout from './GridLayout';

const Navbar = () => {
   return (
      <GridLayout>
         <Flex h='100px' align={'center'}>
            <Text>Logo</Text>
         </Flex>
      </GridLayout>
   );
};

export default Navbar;
