import React from "react";
import { Formik, Form, Field } from "formik";
import { TextField } from "material-ui-formik-components/TextField";
import { Select } from "material-ui-formik-components/Select";
import { Autocomplete } from "material-ui-formik-components/Autocomplete";
import * as Yup from 'yup';
 
 const OrderSchema = Yup.object().shape({
   veo: Yup.number()
     .min(0.1, 'Too Little!')
     .max(10, 'Too Much!')
     .required('Required'),

    //  for async
   email: Yup.string().email('Invalid email').required('Required'), 
   //waiting for buyer
 });

const getExchangePrice = async () => await fetch("https://api.qtrade.io/v1/tickers").then(res=> res.text()).then(res => JSON.parse(res).data.markets.map(({last, last_change, id_hr}) => ({last, last_change, id_hr}))) 

const errorDiv = (errors, touched, key) => errors[key] && touched[key] ? (
        <div>{errors[key]}</div>
       ) : null 

class OrderForm extends React.Component {
  render() {
    return (
      <div >
        <h1>Buy Amoveo</h1>
        <div>...fully decentralized without having to trust any Exchange or opening an account</div>
        <Formik
          initialValues={{
            veo: 1,
            email: "your@email.com",
          }}
          onSubmit={values => {
            alert(
              values
            );
          }}
          validationSchema={OrderSchema}
        >
            {({ errors, touched }) => (
                 <Form>
                 <Field name="veo" label="Amount of VEO you want to buy [0.1min, 10max] - for now" component={TextField} />
                 {errorDiv(errors, touched, "veo")}
                 <Field name="email" label="We notify you once the trade is live on the AMOVEO network"
                 component={TextField}/>
                  {errors.email && touched.email ? (
             <div>{errors.email}</div>
            ) : null}
                 <button type="submit">Submit</button>
               </Form>
            )}
         
        </Formik>
      </div>
    );
  }
}

export default OrderForm;
