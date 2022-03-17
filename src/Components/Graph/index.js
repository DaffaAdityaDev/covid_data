import { Doughnut } from 'react-chartjs-2';

import React from 'react'

const Graph = ( data ) => {
  return (
    <>
        <Doughnut data={data} />
    </>
  )
}

export default Graph