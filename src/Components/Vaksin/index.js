//import dependency
import React, { useState, useEffect, } from 'react'
import axios from "axios"
import { Box, Text, Heading, Center, Wrap } from '@chakra-ui/react'

//create component with rafce
const Vaksin = () => {
    //create state with useState and create variable api request
    const [data, setData] = useState(null);
    const API_URL = 'https://vaksincovid19-api.vercel.app/api/vaksin'

    //formating number and font color
    let NumberFormat = new Intl.NumberFormat('en-US')
    const fontColor = "#fff"

    //useEffect to get data from api
    useEffect(() => {
        axios.get(API_URL).then(res => setData(res.data))
    }, [])

    //return data to render
    return (
      <>
        {data && <>
          <Center pt="2ch">
            <Wrap templateColumns='repeat(auto-fill, minmax(240px, 1fr))' gap={6} justify='center'>
              <Box bg='#56BBF1' w={{ base: '210px', lg: '429px'}} p="1ch" mr="1ch">
                <Heading fontSize='4xl' color={fontColor}>{NumberFormat.format(data.vaksinasi1)}</Heading>
                <Text fontSize='2xl' color={fontColor}>VAKSINASI KE-1</Text>
              </Box>
              <Box bg='#56BBF1' w={{ base: '210px', lg: '429px'}} p="1ch">
                <Heading fontSize='4xl' color={fontColor}>{NumberFormat.format(data.vaksinasi2)}</Heading>
                <Text fontSize='2xl' color={fontColor}>VAKSINASI KE-2</Text>
              </Box>
            </Wrap>
          </Center>
        </>
        }
      </>
    )
  }

export default Vaksin
