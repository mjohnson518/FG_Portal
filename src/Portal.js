import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form , Button, InputGroup, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './App.css';
import './portal.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

function PortalForm() {
  // Import the useNavigate hook from the react-router-dom library
  const navigate = useNavigate();

  // Use the useForm hook from the react-hook-form library to handle form data
  const { register, handleSubmit, formState: { errors }} = useForm();

  // Define a state variable to store the form data
  const [formData, setFormData] = useState({});

  // Define a submit handler for the form
  const onSubmit = ({ target }) => {
  const { navigate } = target.props;

    // Use axios to send the form data object to your server
    axios
      .post('http://localhost:3001/', formData)
      .then(() => {
        // Once the data has been sent to the server, update the form data in state
        setFormData(formData);

        // Use the history object to redirect the user to the next page
        navigate('/PG');
      })
      .catch((error) => {
        // If there was an error sending the data, handle it here
        console.error(error);
      });
  };
  

  return (
   <div>
    <div>
          <p className="description-text"> Please submit your information below: </p>
      </div>
    <div className="Portal-box">
    <Form onSubmit={handleSubmit(onSubmit)} navigate={navigate}>
      <Form.Group className="Portal-text" controlId="formBasicSP" >
        <Form.Label>Storage Provider Name: </Form.Label>
        <Form.Control
          className="form-input"
          type="text"
          placeholder="Enter SP Name"
          name="spName"
          autoComplete="off"
          {...register("message", {
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
          {...register("message", {
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
          {...register("message", {
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
          {...register("message", {
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
          {...register("message", {
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
          {...register("message", {
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
          {...register("message", {
            required: <span className="required-text">* Required</span>,
          })}
        />
        {errors.message && errors.message.message}
      </Form.Group>
      
      <Form.Group className="Portal-text" controlId="formBasicPassword">
        <Form.Label>Password: </Form.Label>
        <Form.Control
          className="form-input"
          type="password"
          placeholder="Password"
          name="password"
          autoComplete="off"
          {...register("message", {
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
          placeholder="Enter Miner IDs"
          name="minerIds"
          autoComplete="off"
          {...register("message", {
            required: <span className="required-text">* Required</span>,
          })}
        />
        {errors.message && errors.message.message}
      </Form.Group>

      <Form.Group className="Portal-text" controlId="formDocumentUpload">
            <Form.Label>
                Upload Utility Bills
                    <OverlayTrigger placement="right" overlay={ 
                        <Tooltip id="tooltip-right" className="info-box">
                            Please upload the most recent three (3) months of utility bills.
                        </Tooltip>
                        }
                    > 
                     <FontAwesomeIcon icon={faInfoCircle} className="fa" />
                    </OverlayTrigger>
            </Form.Label>
            <InputGroup>
              <Form.Control
                className="form-input"
                type="file"
                accept=".pdf, .doc, .docx, .png, .jpeg"
                multiple
                name="upload"
                autoComplete="off"
                {...register("message", {
                  required: <span className="required-text">* Required</span>,
                })}
              />
            </InputGroup>
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
          {...register("message", {
            required: <span className="required-text">* Required</span>,
          })}
        />
        {errors.message && errors.message.message}
      </Form.Group>

      <Button className="Button" variant="primary" type="submit" onSubmit={handleSubmit(onSubmit)}>
        Next
      </Button>
      
    </Form>
    </div>
  </div>
  );
}
  
export default PortalForm;
