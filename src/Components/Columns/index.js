import DataTable from 'react-data-table-component';

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

function MyComponent(data) {
    return (
        <DataTable
            title="Desserts - Cell Styling"
            columns={columns}
            data={data.data} 
        />
    );
};

export default MyComponent;