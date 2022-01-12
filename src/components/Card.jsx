import {
  Box,
  Center,
  useColorModeValue,
  Text,
  Stack,
  Image,
  Button,
} from '@chakra-ui/react';

export default function Card({
  name,
  description,
  repoUrl,
  deployUrl,
  img,
  stack,
}) {
  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}
      >
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: img,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}
        >
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={img}
          />
        </Box>
        <Stack
          pt={10}
          align={'center'}
          textAlign={'center'}
          h={'400px'}
          justifyContent={'space-between'}
        >
          <Text fontSize={'xl'} fontWeight={'bold'}>
            {name}
          </Text>
          <Text fontSize={'large'}>{description}</Text>
          <Text>Tech Stack & Tools: {stack}</Text>
          <Stack direction={'row'} spacing={8}>
            <a href={repoUrl} target="_blank" rel="noreferrer">
              <Button>See repository</Button>
            </a>
            {deployUrl && (
              <a href={deployUrl} target="_blank" rel="noreferrer">
                <Button>See proyect</Button>
              </a>
            )}
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
