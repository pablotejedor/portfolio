import { Icon, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { BsLinkedin, BsGithub, BsEnvelope } from 'react-icons/bs';
const Footer = () => {
  const hoverColor = { color: 'teal.900' };

  return (
    <Stack
      bg={'teal'}
      height={'30vh'}
      justifyContent={'center'}
      alignItems={'center'}
      fontSize={'xl'}
      spacing={6}
      color={'white'}
    >
      <Text>Get in touch:</Text>
      <Stack direction={'row'} spacing={8}>
        <a href="https://www.linkedin.com/in/pablotejedor/" target="_blank">
          <Icon as={BsLinkedin} w={12} h={12} _hover={hoverColor} />
        </a>
        <a href="https://github.com/pablotejedor" target="_blank">
          <Icon as={BsGithub} w={12} h={12} _hover={hoverColor} />
        </a>
        <a href="mailto:pablotejedor95@gmail.com">
          <Icon as={BsEnvelope} w={12} h={12} _hover={hoverColor} />
        </a>
      </Stack>
    </Stack>
  );
};

export default Footer;
