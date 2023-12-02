import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import type { StyleFunctionProps } from '@chakra-ui/styled-system';
import { mode } from '@chakra-ui/theme-tools';

const colors = {
   colorMode: {
      dark: '#0c0c1d',
      light: '#ddd',
   },
};

const defaultStyle = {
   styles: {
      global: (props: StyleFunctionProps) => ({
         body: {
            fontFamily: 'body',
            color: mode('#fff', 'whiteAlpha.900')(props),
            bg: mode('#ddd', '#0c0c1d')(props),
         },
      }),
   },
};

const config: ThemeConfig = {
   initialColorMode: 'dark',
   useSystemColorMode: false,
};

export const theme = extendTheme({ colors, config, defaultStyle });
