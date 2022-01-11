import { extendTheme } from '@chakra-ui/react';

export default extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  
  styles: {
    global: {
      '#root': {
        'fontFamily': 'Bebas Neue',
      },
    },
  },
});
