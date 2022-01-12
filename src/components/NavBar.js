import React from 'react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Icon, Stack, Text } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import { FaReact } from 'react-icons/fa';
const NavBar = () => {
  const { pathname } = useLocation();

  return (
    <Stack
      direction={['column', 'row']}
      bg={'teal'}
      alignItems={'center'}
      justifyContent={'space-between'}
      p={[6, 10]}
      color={'white'}
      fontSize={['larger', 'xx-large']}
      fontWeight={'bold'}
      w={'100vw'}
    >
      <Link to={'/'}>
        <Stack direction={'row'} _hover={{ color: 'teal.900' }} alignItems={'center'}>
          <Icon as={FaReact} w={12} h={12}/>
          <Text>PABLO A. TEJEDOR</Text>
        </Stack>
      </Link>
      <Stack
        direction={['column', 'row']}
        alignItems={'center'}
        spacing={[6, 12]}
        p={6}
      >
        <Link to={'/'}>
          <Text
            color={pathname === '/' && 'teal.900'}
            _hover={{ color: 'teal.900' }}
          >
            PORTFOLIO
          </Text>
        </Link>
        <Link to={'/about'}>
          <Text
            color={pathname === '/about' && 'teal.900'}
            _hover={{ color: 'teal.900' }}
          >
            ABOUT ME
          </Text>
        </Link>
        <ColorModeSwitcher />
      </Stack>
    </Stack>
  );
};

export default NavBar;
