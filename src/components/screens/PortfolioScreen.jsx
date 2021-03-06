import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Stack, Text, Wrap } from '@chakra-ui/react';
import Card from '../Card';
const PortfolioScreen = () => {
  const projects = [
    {
      name: 'CRUD',
      description: 'Responsive web app so you can create, recover, edit and delete projects.',
      repoUrl: 'https://github.com/pablotejedor/estoes-challenge',
      deployUrl: 'https://estoes-challenge-pablotejedor.vercel.app/',
      img: 'https://i.ibb.co/hfSY42v/crud-min.png',
      stack: 'ReactJs, Chakra-ui, react-router-dom, formik',
    }
    ,
    {
      name: 'e-Commerce',
      description: `e-Commerce created as part of Aerolab's coding challenge`,
      repoUrl: 'https://github.com/pablotejedor/aerolab-challenge',
      deployUrl: 'https://aerolab-challenge-pablotejedor.vercel.app/',
      img: 'https://i.ibb.co/4Zj3m07/ecommerce-min.png',
      stack: 'ReactJs, Chakra-ui, framer-motion, Axios',
    },

    {
      name: 'Twitter Clone',
      description: 'Twitter Clone made with Chakra-ui',
      repoUrl: 'https://github.com/pablotejedor/twitter-clone',
      deployUrl: 'https://twitter-clone-kohl-eight.vercel.app/',
      img: 'https://i.ibb.co/RvPNcMp/Twitter-Clone-min.png',
      stack: 'ReactJs, Chakra-ui, react-router-dom, react-icons',
    },
    {
      name: 'Heroes Team',
      description: 'Challenge made for Alkemy',
      repoUrl: 'https://github.com/pablotejedor/heroes-app',
      deployUrl: 'https://heroes-team-deploy.vercel.app/',
      img: 'https://i.ibb.co/PTZHsfr/Heroes-Team-min.png',
      stack:
        'ReactJs, Formik, Axios, Bootstrap 5, react-router-dom, react-tooltip',
    },
    {
      name: 'Pokedex',
      description: `I wanna be the very best, like no one ever was`,
      repoUrl: 'https://github.com/pablotejedor/pokedex-react',
      deployUrl: 'https://pablotejedor.github.io/pokedex-react/',
      img: 'https://i.ibb.co/kgvsFSX/Pokedex-React-min.png',
      stack: 'ReactJs, Vanilla Css',
    },
    {
      name: `Caesar's Cypher`,
      description: 'App made so you can encrypt messages',
      repoUrl: 'https://github.com/pablotejedor/caesar-cypher',
      deployUrl: 'https://pablotejedor.github.io/caesar-cypher/',
      img: 'https://i.ibb.co/XytyL6y/Caesars-Cypher-min.png',
      stack: 'ReactJs, Vanilla Css',
    },
    {
      name: 'Gif Expert',
      description: 'App made using the Giphy API. This was my very first React project.',
      repoUrl: 'https://github.com/pablotejedor/gif-expert',
      deployUrl: 'https://gif-expert-five.vercel.app/',
      img: 'https://i.ibb.co/fS876Dm/Gif-Expert-min.png',
      stack: 'ReactJs, Vanilla Css',
    },
    {
      name: 'DicesApp',
      description: `D&D dice set. It's a PWA`,
      repoUrl: 'https://github.com/pablotejedor/dicesApp',
      deployUrl: 'https://dices-app.vercel.app/',
      img: 'https://i.ibb.co/s9SFkws/Dices-App-min.png',
      stack: 'Vanilla Javascript, Vanilla Css',
    },

    {
      name: 'SomosM??s NGO web',
      description:
        'Project made with other devs, using agile methodologies (scrum)',
      repoUrl: 'https://github.com/pablotejedor/OT-92-Client',
      deployUrl: null,
      img: 'https://i.ibb.co/LNNpdFS/Alkemy-min.png',
      stack:
        'ReactJs, Bootstrap, Formik, Yup, Redux-toolkit, react-router-dom, Sass, MercadoPago, Leaflet',
    },
    {
      name: 'Portfolio',
      description:
        'My personal portfolio. Landing page where i show some of my projects.',
      repoUrl: 'https://github.com/pablotejedor/portfolio',
      deployUrl: 'https://portfolio-pablotejedor.vercel.app/',
      img: 'https://i.ibb.co/brrPJNz/portfolio-min.png',
      stack:
        'Chakra-ui, react-router-dom',
    },
  ];

  return (
    <AnimatePresence>
      <Stack
        //animacion
        as={motion.div}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        //animacion
        alignItems={'center'}
      >
        <Text fontSize={'xx-large'} p={10}>
          Some of my projects:
        </Text>
        <Wrap justify={'center'} spacing={12} m={0}>
          {projects.map((project, i) => (
            <Card
              key={i}
              name={project.name}
              description={project.description}
              repoUrl={project.repoUrl}
              deployUrl={project.deployUrl}
              img={project.img}
              stack={project.stack}
            />
          ))}
        </Wrap>
      </Stack>
    </AnimatePresence>
  );
};

export default PortfolioScreen;
