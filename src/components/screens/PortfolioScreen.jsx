import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Stack } from '@chakra-ui/react';

const PortfolioScreen = () => {
  return (
    <AnimatePresence>
      <Stack
        //animacion
        as={motion.div}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        //animacion
      >
        <span>PortfolioScreen</span>
      </Stack>
    </AnimatePresence>
  );
};

export default PortfolioScreen;
