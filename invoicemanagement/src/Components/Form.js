import React from "react";
import { useForm,Controller } from "react-hook-form";
 import Datepicker from './Datepicker';
import { Container, Row, Col } from 'reactstrap';
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Form = () => {
  const {control, register, handleSubmit ,errors} = useForm();
  const onSubmit = (data) => console.log(data);



  
  return (

    <>
      <Container>
        <div className="outer">

          <form onSubmit={handleSubmit(onSubmit)} className="form-data">
            <h5 className="top-head"><b >INVOICE MANAGEMENT</b></h5>
            <Row className="first">
              <Col md="4">
                <label for="Company name">company Name</label>
                <input
                  type="text"
                  {...register('company name', {required:true,
                    max: 3
                  })}
                />
              </Col>
              <Col md="4">
                <label for="contact">Contact </label>
                <input
                  type="text"
                  {...register('Contact', {
                    max: 3
                  })}
                /></Col>
              <Col md="4">
                <label for="bill number">Bill Number</label>
                <input
                  type="text"
                  {...register('bill number', {
                    max: 3
                  })}
                /></Col>
            </Row>

            <Row className="first">
              <Col md="3">
                <label for="bill for">Amount</label>
                <input
                  type="text"
                  {...register('Amount', {
                    max: 3
                  })}
                  />
              </Col>


              <Col md="3">
                <label for="tax">Tax</label>
                <input
                  type="text"
                  {...register('tax', {
                    max: 3
                  })}
                  /> </Col>

              <Col md="3">
                <label for="gst number">GST Number</label>
                <input
                  type="text"
                  {...register('GST Number', {
                    max: 3
                  })}
                  />
              </Col>

              <Col md="3">
                 <label for="due_date">Due Date</label>
                  {/* <Controller name="due_date" control={control} defaultValue={null}
                  render={
                    ({onChange, value})=><DatePicker   onChange={onChange} selected={value}
                    
                    placeholderText="select date" />

                  }
                  />  */}
                  

                  {<Controller name="due_date" control={control} defaultValue={null}
                     render={
                      (p)=>{
                     console.log(`onChange, value`, p.fields)
                     return <DatePicker  selected={p.field.value}
                     placeholderText="select date"  onChange={p.field.onChange}/>

                   }

                    }
                   />
                  }
                
                
              </Col>
            </Row>


            <Row className="first">
              <Col md="4">
                <label for="total">Notes</label>
                <input
                  type="text"
                  {...register('Notes', {
                    max: 3
                  })}
                  />
              </Col>
              <Col md="3">
                <label for="mode of payment">Mode of Payment</label>
                <select {...register("Payment of Method")} className="select">
        <option value="UPI">UPI</option>
        <option value="Net banking">Net Banking</option>
        <option value="Debit Card">Debit Card</option>
      </select>
              </Col>

            </Row>
            {/* 
            <Row className="first">
              <Col md="3">
                <label for="gst number">GST Number</label>
                <input type="text" onChange={change} name="gstNumber" value={initial.gstNumber} />
              </Col>
              <Col md="3">
                <label for="tax">Tax</label>
                <input type="text" onChange={change} name="tax" value={initial.tax} /></Col>
             
              <Col md="3">
                <label for="notes">Notes</label>
                <input type="text" onChange={change} name="notes" value={initial.notes} />
              </Col>
            </Row> */}
            <Row className="first">
              <Col md="3">
                <label for="item type">Items  Type</label>
                <input
                  type="text"
                  {...register('Items type', {
                    max: 3
                  })}
                  />
              </Col>
              <Col md="3">
                <label for="product name">Product Name</label>
                <input
                  type="text"
                  {...register('product name', {
                    max: 3
                  })}
                  /></Col>
              <Col md="2">
                <label for="Quantity">Quantity</label>
                <input
                  type="text"
                  {...register('Quantity', {
                    max: 3
                  })}
                  /></Col>

              <Col md="2">
                <label for="price">Price</label>
                <input type="text"
                  {...register('price', {
                    max: 3
                  })}
                  />
              </Col>
              <Col md="2">
                <label for="total">Total</label>
                <input type="text"
                  {...register('Total', {
                    max: 3
                  })}
                  />
              </Col>

            </Row>


            <Row className="first">
              <Col className="button-column"  >
                <button className="addnew-btn" >Add New <i class="far fa-plus-square"></i></button>
              </Col>

            </Row>


            <Row className="first">
              <Col className="button-column"  >
                <button className="submit-btn" >SUBMIT</button>
              </Col>

            </Row>

          </form>
        </div>
      </Container>

    </>
  )
}

export default Form
