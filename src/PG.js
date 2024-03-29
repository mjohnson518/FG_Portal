import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form , Button, InputGroup, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './App.css';
import './portal.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

function PG() {
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
        navigate('/PG2');
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
      <h2><u> Water Consumption </u></h2>
          <Form.Group className="Portal-text" controlId="formBasicUtility">
            <Form.Label>Water Utility Provider: </Form.Label>
            <Form.Control
              className="form-input"
              type="text"
              placeholder="Enter Utility Provider"
              name="utilityProvider"
              autoComplete="off"
              {...register("message", {
                  required: <span className="required-text">* Required</span>,
              })}
              />
              {errors.message && errors.message.message}
          </Form.Group>

          <Form.Group className="Portal-text" controlId="formBasicBillID">
            <Form.Label>Reference / Bill ID Numbers: </Form.Label>
            <Form.Control
              className="form-input"
              type="text"
              placeholder="Enter Ref/Bill #'s"
              name="referenceNumber"
              {...register("message", {
                required: <span className="required-text">* Required</span>,
              })}
              />
              {errors.message && errors.message.message}
          </Form.Group>

          <Form.Group className="Portal-text" controlId="formBasicEstimatedUsage">
            <Form.Label>Estimated Annual Water Use (L): </Form.Label>
            <Form.Control
              className="form-input"
              type="text"
              placeholder="Enter Estimated Annual Use (L)"
              name="estimatedUsage"
              {...register("message", {
                required: <span className="required-text">* Required</span>,
              })}
              />
              {errors.message && errors.message.message}
          </Form.Group>

          <Form.Group className="Portal-text" controlId="formDocumentUpload">
            <Form.Label>
                Upload Water Utility Bills
                    <OverlayTrigger placement="right" overlay={ 
                        <Tooltip id="tooltip-right" className="info-box">
                            Please upload the most recent three (3) months of water utility bills.
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

          <h2><u> Electricity Consumption </u></h2>
          
          <Form.Group className="Portal-text" controlId="formBasicUtility">
            <Form.Label>Electricity Utility Provider: </Form.Label>
            <Form.Control
              className="form-input"
              type="text"
              placeholder="Enter Utility Provider"
              name="utilityProvider"
              autoComplete="off"
              {...register("message", {
                  required: <span className="required-text">* Required</span>,
              })}
              />
              {errors.message && errors.message.message}
          </Form.Group>

          <Form.Group className="Portal-text" controlId="formBasicBillID">
            <Form.Label>Reference / Bill ID Numbers: </Form.Label>
            <Form.Control
              className="form-input"
              type="text"
              placeholder="Enter Ref/Bill #'s"
              name="referenceNumber"
              {...register("message", {
                required: <span className="required-text">* Required</span>,
              })}
              />
              {errors.message && errors.message.message}
          </Form.Group>

          <Form.Group className="Portal-text" controlId="formBasicEstimatedUsage">
            <Form.Label>Estimated Annual Electricity Use (kWh): </Form.Label>
            <Form.Control
              className="form-input"
              type="text"
              placeholder="Enter Estimated Annual Use (kWh)"
              name="estimatedUsage"
              {...register("message", {
                required: <span className="required-text">* Required</span>,
              })}
              />
              {errors.message && errors.message.message}
          </Form.Group>

          <Form.Group className="Portal-text" controlId="formDocumentUpload">
            <Form.Label>
                Upload Electricity Utility Bills
                    <OverlayTrigger placement="right" overlay={ 
                        <Tooltip id="tooltip-right" className="info-box">
                            Please upload the most recent three (3) months of electricity utility bills.
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
          <Link to="/PG2">     
            <Button className="Button" variant="primary" type="submit" onClick={handleSubmit}>
            Next
            </Button>
          </Link>
          </Form> 
    </div>
    </div>
  );
}
export default PG;



