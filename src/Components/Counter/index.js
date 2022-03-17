import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Container, Badge, Text, Heading, Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons'


const Counter = () => {
    const [response, setResponse] = useState(null);
    
    let NumberFormat = new Intl.NumberFormat('en-US')

    useEffect(() => {

        axios.get('https://apicovid19indonesia-v2.vercel.app/api/indonesia/more')
        .then(response => setResponse(response.data));
    }, []);

    console.log(response)
    

  return (
    <>
        {response && 
            <>
                <Text fontSize='2xl' backgroundColor='#e5e5e5' mt="32px">DATA COVID-19 CORONAVIRUS</Text>
                <Text fontSize='sm'>Update terakhir: {response.total.lastUpdate}</Text>
                <Heading fontSize='4xl'>Total Kasus Positif Corona:</Heading>
                <Text fontSize='5xl'>{NumberFormat.format(response.total.positif)}</Text>
                <Heading fontSize='3xl'>Total Meninggal:</Heading>
                <Text fontSize='5xl'>{NumberFormat.format(response.total.meninggal)}</Text>
                <Heading fontSize='3xl'>Total Sembuh:</Heading>
                <Text fontSize='5xl'>{NumberFormat.format(response.total.sembuh)}</Text>

                <Text mb="50px" fontSize='2xl'>Raporan Kasus dan Kematian Berdasarkan Provinsi</Text>
                <Text>Virus COVID-19 telah menyebar ke 32 provinsi diseluruh indonesia 
                    <Link color='#0000EE' href='https://covid19.go.id/' isExternal> untuk data lebih lanjut dan terbaru<ExternalLinkIcon mx='2px' /></Link>
                </Text>
            </>
        }
    </>
  )
}

export default Counter