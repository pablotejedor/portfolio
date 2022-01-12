import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Image, Stack, Text } from '@chakra-ui/react';
const AboutMeScreen = () => {
  return (
    <AnimatePresence>
      <Stack
        direction={'row'}
        alignItems={'center'}
        spacing={12}
        //animacion
        as={motion.div}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        //animacion
        m={0}
        p={20}
      >
        <Image
          src="https://i.ibb.co/p3rFRxF/DSC-2166-min.jpg"
          alt="picture"
          borderRadius={'50%'}
          boxSize={'300px'}
        />
        <Text fontSize={'lg'}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </Text>
      </Stack>
    </AnimatePresence>
  );
};

export default AboutMeScreen;
