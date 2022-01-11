import React from 'react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Stack, Text } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const { pathname } = useLocation();

  return (
    <Stack
      direction={'row'}
      bg={'teal'}
      height={'17vh'}
      alignItems={'center'}
      justifyContent={'space-between'}
      p={12}
      color={'white'}
      fontSize={'xx-large'}
      fontWeight={'bold'}
    >
      <Link to={'/'}>
        <Text _hover={{ color: 'teal.900' }}>PABLO A. TEJEDOR</Text>
      </Link>
      <Stack direction={'row'} alignItems={'center'} spacing={12} p={6}>
        <Link to={'/'}>
          <Text
            color={pathname == '/' && 'teal.900'}
            _hover={{ color: 'teal.900' }}
          >
            PORTFOLIO
          </Text>
        </Link>
        <Link to={'/about'}>
          <Text
            color={pathname == '/about' && 'teal.900'}
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