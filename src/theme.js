import { extendTheme } from '@chakra-ui/react';

export default extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },

  styles: {
    global: {
      html: {
        scrollBehavior: 'smooth',
      },
      '#root': {
        fontFamily: 'Bebas Neue',
        overflowX: 'hidden',
      },
    },
  },
});
