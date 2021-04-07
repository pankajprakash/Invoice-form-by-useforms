import React from "react";
import { useForm, Controller } from "react-hook-form";
import Datepicker from './Datepicker';
import { Container, Row, Col } from 'reactstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



const Form = () => {
  const { control, register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);




  return (

    <>
      <Container>
        <div className="outer">

          <form onSubmit={handleSubmit(onSubmit)} className="form-data">
            <h5 className="top-head"><b >INVOICE MANAGEMENT</b></h5>
            <Row className="first">
              <Col md="4">
                <label for="From">From</label>
                <input className="first-input-tag" placeholder="KeyMouseit"
                  type="text"
                  {...register('From', {
                    required: true,
                    max: 3
                  })}
                />
              </Col>
              <Col md="4">
                <label for="Created By">Created By </label>
                <input
                  type="text"
                  {...register('Created By', {
                    max: 3
                  })}
                /></Col>
              <Col md="4">
                <label for="To">To</label>
                <input
                  type="text"
                  {...register('To', {
                    max: 3
                  })}
                /></Col>
            </Row>

            <Row className="first">
              <Col md="3">
                <label for="Notes">Notes</label>
                <input
                  type="text"
                  {...register('Notes', {
                    max: 3
                  })}
                />
              </Col>


              <Col md="3">
                <label for="product name">Product Name</label>
                <input
                  type="text"
                  {...register('Product_Name', {
                    max: 3
                  })}
                /> </Col>

              <Col md="3">
                <label for="Quantity">Quantity</label>
                <input
                  type="text"
                  {...register('Quantity', {
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
                    (p) => {
                      console.log(`onChange, value`, p.fields)
                      return <DatePicker selected={p.field.value}
                        placeholderText="select date   "  onChange={p.field.onChange} />

                    }

                  }
                />
                }


              </Col>
            </Row>


            <Row className="first">
              <Col md="4">
                <label for="description">Description</label>
                <input
                  type="text"
                  {...register('Discription', {
                    max: 3
                  })}
                />
              </Col>

              <Col md="4">
                <label for="price">Price</label>
                <input
                  type="text"
                  {...register('Price', {
                    max: 3
                  })}
                />
              </Col>


              <Col md="4">
                <label for="Total">Total</label>
                <input
                  type="text"
                  {...register('Total', {
                    max: 3
                  })}
                /></Col>

              {/* <Col md="3">
                <label for="mode of payment">Mode of Payment</label>
                <select {...register("Payment of Method")} className="select">
                  <option value="UPI">UPI</option>
                  <option value="Net banking">Net Banking</option>
                  <option value="Debit Card">Debit Card</option>
                </select>
              </Col> */}

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
            
              <Col md="4">
              <label for="status">Status</label>
                <select {...register("Payment of Method")} className="select">
                  <option value="UPI">Pending</option>
                  <option value="Net banking">Under Review</option>
                  <option value="Debit Card">Approved</option>
                </select>
                </Col>


            </Row>


            <Row className="first">
              <Col className="button-column"  >
                <button className="addnew-btn" ><i class="far fa-plus-square"> Add New </i></button>
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
