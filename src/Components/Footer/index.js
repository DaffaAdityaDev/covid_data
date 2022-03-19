import React from 'react'
import { Text, Center } from '@chakra-ui/react';

const Footer = () => {
  return (
    <>
        <Center>
            <Text fontSize='2xl' pr='1ch'>Check Github repo for more info</Text>
                <a href="https://github.com/DaffaAdityaDev" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/color/48/000000/github.png" alt="github" />
                </a>
        </Center>
    </>
  )
}

export default Footer