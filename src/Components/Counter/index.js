//import dependency
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {  Wrap, Text, Heading, Box, Center } from '@chakra-ui/react';

//create component with rafce
const Counter = () => {
    //create state with useState and create variable api request
    const [response, setResponse] = useState(null);
    const API_URL = 'https://apicovid19indonesia-v2.vercel.app/api/indonesia/more';

    // formating number and font color
    let NumberFormat = new Intl.NumberFormat('en-US')
    const fontColor = "#fff"

    // useEffect to get data from api
    useEffect(() => {
        axios.get(API_URL)
        .then(response => setResponse(response.data));
    }, []);
    
    // return data to render
    return (
        <>
            {response && 
                <>
                    <Box textAlign="center">
                        <Text fontSize='2xl' backgroundColor='#e5e5e5' mt="32px">DATA COVID-19 CORONAVIRUS INDONESIA</Text>
                        <Text fontSize='sm'>Update terakhir: {response.penambahan.tanggal}</Text>
                    </Box>
                    <Box textAlign="center" mb="5ch"> 
                        <Heading fontSize='4xl'>Total Kasus Positif Corona:</Heading>
                        <Text fontSize='5xl'>{NumberFormat.format(response.total.positif)}</Text>
                    </Box>
                    <Center>
                        <Wrap templateColumns='repeat(auto-fill, minmax(240px, 1fr))' gap={6} justify='center'>
                            <Box bg='#4D77FF' w="210px" p="1ch">
                                <Heading fontSize='4xl' color={fontColor}>{NumberFormat.format(response.total.positif)}</Heading>
                                <Text fontSize='2xl' color={fontColor}>TERKONFIRMASI</Text>
                                <Text fontSize='3xl' color={fontColor}>+{NumberFormat.format(response.penambahan.positif)}</Text>
                            </Box>
                            <Box bg='#FFB72B' w="210px" p="1ch">
                                <Heading fontSize='4xl' color={fontColor}>{NumberFormat.format(response.total.dirawat)}</Heading>
                                <Text fontSize='2xl' color={fontColor}>KASUS AKTIF</Text>
                                <Text fontSize='3xl' color={fontColor}>{NumberFormat.format(response.penambahan.dirawat)}</Text>
                            </Box>
                            <Box bg="#97DBAE" w="210px" p="1ch">
                                <Heading fontSize='4xl' color={fontColor}>{NumberFormat.format(response.total.sembuh)}</Heading>
                                <Text fontSize='2xl' color={fontColor}>SEMBUH</Text>
                                <Text fontSize='3xl' color={fontColor}>+{NumberFormat.format(response.penambahan.sembuh)}</Text>
                            </Box>
                            <Box bg='#E83A14' w="210px" p="1ch">
                                <Heading fontSize='4xl' color={fontColor}>{NumberFormat.format(response.total.meninggal)}</Heading>
                                <Text fontSize='2xl' color={fontColor}>MENINGGAL</Text>
                                <Text fontSize='3xl' color={fontColor}>+{NumberFormat.format(response.penambahan.meninggal)}</Text>
                            </Box>
                        </Wrap>
                    </Center>
                </>
            }
        </> 
    )
}

export default Counter