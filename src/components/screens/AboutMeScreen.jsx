import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Image, Stack, Text } from '@chakra-ui/react';
const AboutMeScreen = () => {
  return (
    <AnimatePresence>
      <Stack
        direction={['column', 'row']}
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
          Hello there! I'm Pablo, React FrontEnd dev from Rosario, Argentina.
          {<br />}
          The adjective that fit me the most is curious. Due of that, i keep
          myself always learning new things. In my free time i enjoy playing
          videogames like the soulsborne saga, reading about history (WW I & II,
          Greek and Roman history, and many many other things), and cooking.
          {<br />}
          I came across with programming during the first covid lockdown
          and since this moment, i realized that is my passion. I literally
          thought: 'Where were you been all my life?'
          {<br />}
          Do you like my projects? Are you a recruiter? You can get in touch
          with me via Linkedin, Github or Gmail. Links in the footer. See you!
        </Text>
      </Stack>
    </AnimatePresence>
  );
};

export default AboutMeScreen;
