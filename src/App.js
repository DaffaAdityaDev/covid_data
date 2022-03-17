import './App.css';
import React from 'react';
import Table from './Components/Table';
import Counter from './Components/Counter';
import { Container } from '@chakra-ui/react';

function App() {
  

  return (
    <Container>
      <Counter />
      <Table/> 
    </Container>
  );
}

export default App;
