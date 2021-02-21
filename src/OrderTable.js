import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Button } from '@material-ui/core';

import Toggle from 'react-toggle'
import "react-toggle/style.css" // for ES6 modules
import { useState } from 'react';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'orderType', headerName: 'Order Type', width: 110 },
  { field: 'pair', headerName: 'Pair', width: 110 },
  {
    field: 'amount',
    headerName: 'Amount',
    type: 'number',
    width: 110,
  },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
//   },
];

const pairOne = "VEO/BTC"

const rows = [
  { id: 1, orderType: 'buy', pair: pairOne, amount: 3 },
  { id: 2, orderType: 'sell', pair: pairOne, amount: 2 },
  { id: 3, orderType: 'buy', pair: pairOne, amount: 4 },
  { id: 6, orderType: 'buy', pair: pairOne, amount: 1.5 },
  { id: 7, orderType: 'buy', pair: pairOne, amount: 2.3 },
  { id: 4, orderType: 'sell', pair: pairOne, amount: 1 },
  { id: 9, orderType: 'sell', pair: pairOne, amount: 2.2 },
  { id: 8, orderType: 'sell', pair: pairOne, amount: 11 },
  { id: 10, orderType: 'sell', pair: pairOne, amount: 8.5 },
];


export default function DataTable() {
    const [buy, setBuy] = useState(true);

  return (
    <div style={{ height: 400, width: '100%' }}>

<div> {"I want to  "} 
<Button variant="contained" color={buy ? "primary" : "secondary"} onClick={()=> setBuy(!buy)}>
  {buy ? "BUY" : "SELL"}
</Button>

 {" VEO for BTC"}
</div>


      <DataGrid 
      onRowSelected={({data}) => console.log(data, "selection")}
      rows={rows.filter(({orderType}) => buy ? orderType == "buy" : orderType == "sell" )} columns={columns} pageSize={5}/>
    </div>
  );
}

// <label>
//   <Toggle
//     // defaultChecked={this.state.soupIsReady}
//     icons = {false}
//     onChange={() => setBuy(!buy)} 
//     />
//   <div>{buy ? "BUY" : "SELL"}</div>
// </label>