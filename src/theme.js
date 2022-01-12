import { extendTheme } from '@chakra-ui/react';

export default extendTheme({
  config: {
    initialColorMode: 'light',
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
