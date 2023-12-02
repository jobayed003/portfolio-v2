import { Box } from '@chakra-ui/react';

const GridLayout = ({ children }: ChildrenType) => {
   return (
      <Box maxW={'1400px'} m={'auto'}>
         {children}
      </Box>
   );
};

export default GridLayout;
