import logo from './logo.svg';
import './App.css';
import OrderForm from './OrderForm'
import OrderTable from './OrderTable'
import {Fragment} from 'react'


const centered = {
  paddingLeft: 20 + "vw", paddingRight: 20+ "vw"
  }
function App() {
  return (
    <Fragment>

    
    <div style={centered}>
      <OrderForm />

    </div>
      <div style={centered}>
      <OrderTable />

    </div>
    </Fragment>
  );
}

export default App;
