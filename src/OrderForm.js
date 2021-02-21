import React from "react";
import { Formik, Form, Field } from "formik";
import { TextField } from "material-ui-formik-components/TextField";
import { Select } from "material-ui-formik-components/Select";
import { Autocomplete } from "material-ui-formik-components/Autocomplete";
import * as Yup from 'yup';
import { Button } from '@material-ui/core';

const OrderSchema = Yup.object().shape({
  veo: Yup.number()
    .min(0.1, 'Too Little!')
    .max(10, 'Too Much!')
    .required('Required'),

  //  for async
  email: Yup.string().email('Invalid email').required('Required'),
  //waiting for buyer
});


const errorDiv = (errors, touched, key) => errors[key] && touched[key] ? (
  <div>{errors[key]}</div>
) : null

const OrderForm = ({ pair, buy }) => (
  <div>
    <h1>{buy ? "BUY" : "SELL"} {pair.split("/")[0]} for  {pair.split("/")[1]}</h1>
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
      {({ errors, touched, values }) => (
        <Form>
          <div>
            <Field name="veo" label="Amount of VEO [0.1min, 10max] - for now" component={TextField} />
            {errorDiv(errors, touched, "veo")}
            <Field name="email" label="We notify you once the trade is live on the AMOVEO network"
              component={TextField} />
            {errorDiv(errors, touched, "email")}

          </div>




          <div className="boldend">
            {buy ? "BUY" : "SELL"} {values.veo} {pair.split("/")[0]} for  {pair.split("/")[1]} {" "}
            <Button variant="contained" color={"default"} onClick={() => alert("ToDO: actual backend")}>
              Create Order
                </Button>
          </div>


        </Form>
      )}

    </Formik>
  </div>
);

export default OrderForm;
