import DataTable from 'react-data-table-component';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

function Table(data) {
    const [response, setResponse] = useState([]);
    const [pending, setPending] = React.useState(true);
  
    useEffect(() => {

        axios.get('https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi')
            .then(response => setResponse(response.data)).then(setPending(false));
    }, []);

    return (
        <DataTable
            title="Total 32 Provinsi"
            columns={columns}
            data={response} 
            progressPending={pending}
            allowOverflow={true}
        />
    );
};

export default Table;