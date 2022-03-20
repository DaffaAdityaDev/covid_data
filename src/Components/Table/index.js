//import dependency
import DataTable from 'react-data-table-component';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Text, Link, } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons'

//create columns with React Data Table Component
const columns = [
    {
        name: 'Provinsi',
        selector: row => row.provinsi,
        sortable: true,
    },
    {
        name: 'Kasus',
        selector: row => row.kasus,
        sortable: true,
    },
    {
        name: 'dirawat',
        selector: row => row.dirawat,
        sortable: true,
    },
    {
        name: 'sembuh',
        selector: row => row.sembuh,
        sortable: true,
    },
    {
        name: 'meninggal',
        selector: row => row.meninggal,
        sortable: true,
    },
];

function Table() {
    //create state with useState for data and loading stastus
    const [response, setResponse] = useState([]);
    const [pending, setPending] = useState(true);
    
    // useEffect to get data from api
    useEffect(() => {

        axios.get('https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi')
            .then(response => setResponse(response.data)).then(setPending(false));
    }, []);

    // return data to render
    return (
        <>
            <Text mt="50px" fontSize='2xl'>Raporan kasus dan kematian berdasarkan berbagai Provinsi.</Text>
                <Text>Virus COVID-19 telah menyebar ke 32 provinsi diseluruh indonesia 
                <Link color='#0000EE' href='https://covid19.go.id/' isExternal> untuk data lebih lanjut dan terbaru<ExternalLinkIcon mx='2px' /></Link>
            </Text>
            {/* if data is loading show loading then if not render DataTable*/}
            <DataTable
                title="Total 32 Provinsi"
                columns={columns}
                data={response} 
                progressPending={pending}
                allowOverflow={true}
            />
        </>
    );
};

export default Table;