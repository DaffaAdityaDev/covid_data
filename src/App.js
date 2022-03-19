import './App.css';
import React from 'react';
import Table from './Components/Table';
import Counter from './Components/Counter';
import { Container } from '@chakra-ui/react';
import Vaksin from './Components/Vaksin';
import Footer from './Components/Footer';

function App() {
  return (
    <Container maxW='container.lg'>
        <Counter/>
        <Vaksin/>
        <Table/>
        <Footer />
    </Container>
  );
}

export default App;
