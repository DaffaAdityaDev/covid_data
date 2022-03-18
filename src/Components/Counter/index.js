import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {  Wrap, Text, Heading, Link, Box, Center } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons'


const Counter = () => {
    const [response, setResponse] = useState(null);
    
    let NumberFormat = new Intl.NumberFormat('en-US')

    const fontColor = "#fff"

    useEffect(() => {

        axios.get('https://apicovid19indonesia-v2.vercel.app/api/indonesia/more')
        .then(response => setResponse(response.data));
    }, []);

    console.log(response)
    

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
                

                <Text mb="50px" fontSize='2xl'>Raporan kasus dan kematian berdasarkan berbagai Provinsi.</Text>
                <Text>Virus COVID-19 telah menyebar ke 32 provinsi diseluruh indonesia 
                    <Link color='#0000EE' href='https://covid19.go.id/' isExternal> untuk data lebih lanjut dan terbaru<ExternalLinkIcon mx='2px' /></Link>
                </Text>
            </>
        }
    </> 
  )
}

export default Counter