import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Button } from '@material-ui/core';
import { Select } from '@material-ui/core';
import OrderForm from './OrderForm'
import Toggle from 'react-toggle'
import "react-toggle/style.css" // for ES6 modules
import { useState, Fragment } from 'react';

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
    const [createOrder, setCreateOrder] = useState(false)
    const [selection, setSelection] = useState(null)
    const [rowData, setRowData] = useState(rows)
    return (
        <div style={{ height: 400, width: '100%' }}>
            <Select
                native
                defaultValue={buy ? "BUY" : "SELL"}
                onChange={event => {
                    setBuy(event.target.value == "buy");
                }
                }
            //   inputProps={{
            //     name: 'age',
            //     id: 'age-native-simple',
            //   }}
            >
                <option value={"buy"}>BUY</option>
                <option value={"sell"}>SELL</option>
            </Select>
            {" VEO for BTC (at Market) from "}
            {/* OrderBook or create  */}

            <Select
                native
                defaultValue={createOrder ? "New Order" : "Order Book"}
                onChange={event => {
                    setCreateOrder(event.target.value == "2");
                }
                }
            //   inputProps={{
            //     name: 'age',
            //     id: 'age-native-simple',
            //   }}
            >
                <option value={"1"}>Order Book</option>
                <option value={"2"}>New Order</option>
            </Select>

            {/* 
                    {" or "}
                <Button variant="contained" color={createOrder ? "primary" : "default"} onClick={() => setCreateOrder(true)}>
                    new order
                </Button> */}
            {createOrder ? <div>
                <OrderForm buy={buy} pair={pairOne} />
                {/* <Button color="default" onClick={() => setCreateOrder(false)}>
                        Close
                        </Button> */}

            </div>

                :

                <DataGrid
                    onRowSelected={({ data }) => setSelection(data)}
                    rows={rows.filter(({ orderType }) => buy ? orderType == "sell" : orderType == "buy")} columns={columns} pageSize={5} />


            }
            {(selection && !createOrder) &&

                <div class="boldend">
                     
                    <Button variant="contained" color={"default"} onClick={() => alert("ToDO: actual backend")}>
                    {"Match "} {buy ? "SELL": "BUY"} 
                </Button>  
                {" order for "} {selection.amount} {selection.pair.split("/")[0]}
                </div>
            }







        </div>
    );
}


