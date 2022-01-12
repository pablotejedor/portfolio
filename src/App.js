import React from 'react';
import { ChakraProvider, Container, Stack } from '@chakra-ui/react';
import theme from './theme';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import PortfolioScreen from './components/screens/PortfolioScreen';
import AboutMeScreen from './components/screens/AboutMeScreen';
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container maxWidth={'100vw'} p={0}>
        <Stack>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route exact path={'/'} element={<PortfolioScreen />} />
              <Route exact path={'/about'} element={<AboutMeScreen />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </Stack>
      </Container>
    </ChakraProvider>
  );
}

export default App;
