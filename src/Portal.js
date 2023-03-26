import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form , Button, } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './App.css';
import './portal.css';
import { Link } from 'react-router-dom';


function PortalForm() {
  // Import the useNavigate hook from the react-router-dom library
  const navigate = useNavigate();

  // Use the useForm hook from the react-hook-form library to handle form data
  const { register, handleSubmit, formState: { errors }} = useForm();

  // Define a submit handler for the form
  const onSubmit = (data) => {
    axios
      .post('http://localhost:3001/', data)
      .then(() => {
        navigate('/PG');
      })
      .catch((error) => {
        console.error(error);
      });
  };
  

  return (
   <div>
    <div>
          <p className="description-text"> Please submit your information below: </p>
      </div>
    <div className="Portal-box">
    <h2><u> General Information </u></h2>
    <Form onSubmit={handleSubmit(onSubmit)} navigate={navigate}>
      <Form.Group className="Portal-text" controlId="formBasicSP" >
        <Form.Label>Storage Provider Name: </Form.Label>
        <Form.Control
          className="form-input"
          type="text"
          placeholder="Enter SP Name"
          name="spName"
          autoComplete="off"
          {...register("spName", {
            required: <span className="required-text">* Required</span>,
          })}
        />
        {errors.message && errors.message.message}
      </Form.Group>

      <Form.Group className="Portal-text" controlId="formBasicCountry">
        <Form.Label>Country: </Form.Label>
        <Form.Control
          className="form-input"
          type="text"
          placeholder="Enter Country"
          name="country"
          autoComplete="off"
          {...register("country", {
            required: <span className="required-text">* Required</span>,
          })}
        />
        {errors.message && errors.message.message}
      </Form.Group>

      <Form.Group className="Portal-text" controlId="formBasicState">
        <Form.Label>Region/State: </Form.Label>
        <Form.Control
          className="form-input"
          type="text"
          placeholder="Enter Region/State"
          name="state"
          autoComplete="off"
          {...register("state", {
            required: <span className="required-text">* Required</span>,
          })}
        />
        {errors.message && errors.message.message}
      </Form.Group>

      <Form.Group className="Portal-text" controlId="formBasicCity">
        <Form.Label>City: </Form.Label>
        <Form.Control
          className="form-input"
          type="text"
          placeholder="Enter City"
          name="city"
          autoComplete="off"
          {...register("city", {
            required: <span className="required-text">* Required</span>,
          })}
        />
        {errors.message && errors.message.message}
      </Form.Group>

      <Form.Group className="Portal-text" controlId="formBasicAddress">
        <Form.Label>Address: </Form.Label>
        <Form.Control
          className="form-input"
          type="text"
          placeholder="Enter Address"
          name="address"
          autoComplete="off"
          {...register("address", {
            required: <span className="required-text">* Required</span>,
          })}
        />
        {errors.message && errors.message.message}
      </Form.Group>

      <Form.Group className="Portal-text" controlId="formBasicZip">
        <Form.Label>Zip/Postal Code: </Form.Label>
        <Form.Control
          className="form-input"
          type="text"
          placeholder="Enter Zip/Postal Code"
          name="zip"
          autoComplete="off"
          {...register("zip", {
            required: <span className="required-text">* Required</span>,
          })}
        />
        {errors.message && errors.message.message}
      </Form.Group>
      
      <Form.Group className="Portal-text" controlId="formBasicEmail">
        <Form.Label>Email address: </Form.Label>
        <Form.Control
          className="form-input"
          type="email"
          placeholder="Enter email"
          name="email"
          autoComplete="off"
          {...register("email", {
            required: <span className="required-text">* Required</span>,
          })}
        />
        {errors.message && errors.message.message}
      </Form.Group>

      <Form.Group className="Portal-text" controlId="formBasicMiners">
        <Form.Label>MinerIDs: </Form.Label>
        <Form.Control
          className="form-input"
          type="text"
          placeholder="Enter Miner IDs (seperated by commas)"
          name="minerIds"
          autoComplete="off"
          {...register("minerIDs", {
            required: <span className="required-text">* Required</span>,
          })}
        />
        {errors.message && errors.message.message}
      </Form.Group>

      <Form.Group className="Portal-text" controlId="formBasicID">
            <Form.Label>IP Addresses: </Form.Label>
            <Form.Control
              className="form-input"
              type="text"
              placeholder="Enter IPs (seperated by commas)"
              name="ipAddresses"
              autoComplete="off"
              {...register("ipAddresses", {
                required: <span className="required-text">* Required</span>,
              })}
            />
            {errors.message && errors.message.message}
      </Form.Group>

      <Form.Group className="Portal-text" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label={
          <>
            I agree with the{" "}
            <a href="https://green.filecoin.io" className='App-link' target="_blank" rel="noopener noreferrer">Data Consent Clause</a>.
          </>
        }
          name="checkbox"
          {...register("checkbox", {
            required: <span className="required-text">* Required</span>,
          })}
        />
        {errors.message && errors.message.message}
      </Form.Group>
        <Link to="/PG">   
            <Button className="Button" variant="primary" type="submit" onSubmit={handleSubmit(onSubmit)}>
              Next
            </Button>
        </Link>
      
    </Form>
    </div>
  </div>
  );
}
  
export default PortalForm;
