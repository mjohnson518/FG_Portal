import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form , Button, InputGroup, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './App.css';
import './portal.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

function PG3() {
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
        navigate('/PG4');
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
      <h2><u> Renewable Energy Produced </u></h2>
        <Form onSubmit={handleSubmit(onSubmit)} navigate={navigate}>
          <Form.Group className="Portal-text" controlId="formBasicSelect">
                <Form.Label>Do you generate renewable energy to power Storage Provider Operations?
                        <OverlayTrigger placement="right" overlay={ 
                            <Tooltip id="tooltip-right" className="info-box">
                                Does storage provider produce solar energy used to power Filecoin IT infrastructure?
                            </Tooltip>}> 
                            <FontAwesomeIcon icon={faInfoCircle} className="fa" />
                        </OverlayTrigger>
                <Form.Control as="select" name="renewableEnergyPurchased" className="drop-down" {...register("message", {
                    required: <span className="required-text">* Required</span>, })}>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </Form.Control>
                </Form.Label>
          </Form.Group>

          <Form.Group className="Portal-text" controlId="formBasicUtility">
            <Form.Label>Renewable Energy Installation Date </Form.Label>
            <Form.Control
              className="form-date"
              type="date"
              placeholder="Enter Renebwable Energy Installation Date"
              name="REInstallationDate"
              autoComplete="off"
              {...register("message", {
                  required: <span className="required-text">* Required</span>,})}/>
              {errors.message && errors.message.message}
          </Form.Group>

          <Form.Group className="Portal-text" controlId="formBasicUtility">
            <Form.Label>Renewable Energy Inspection Date </Form.Label>
            <Form.Control
              className="form-date"
              type="date"
              placeholder="Enter Renebwable Energy Inspection Date"
              name="REInspectionDate"
              autoComplete="off"
              {...register("message", {
                  required: <span className="required-text">* Required</span>,})}/>
              {errors.message && errors.message.message}
          </Form.Group>

          <Form.Group className="Portal-text" controlId="formPBasicPower">
            <Form.Label>Total Solar Watt Peak (kWp): </Form.Label>
            <Form.Control
              className="form-input"
              type="text"
              placeholder="Enter Total Solar Watt Peak (kWp)"
              name="TotalSolarWattPeak"
              {...register("message", {
                required: <span className="required-text">* Required</span>,
              })}
              />
              {errors.message && errors.message.message}
          </Form.Group>

          <Form.Group className="Portal-text" controlId="formBasicNotUsed">
            <Form.Label>Number (#) of Solar Panels: </Form.Label>
            <Form.Control
              className="form-input"
              type="text"
              placeholder="Enter Number (#) of Solar Panels"
              name="NumberSolarPanels"
              {...register("message", {
                required: <span className="required-text">* Required</span>,
              })}
              />
              {errors.message && errors.message.message}
          </Form.Group>

          <Form.Group className="Portal-text" controlId="formBasicEstimatedMeth">
            <Form.Label>Solar Panel Brand: </Form.Label>
            <Form.Control
              className="form-input"
              type="text"
              placeholder="Enter Solar Panel Brand"
              name="SolarBrand"
              {...register("message", {
                required: <span className="required-text">* Required</span>,
              })}
              />
              {errors.message && errors.message.message}
          </Form.Group>

          <Form.Group className="Portal-text" controlId="formBasicEstimatedMeth">
            <Form.Label>Solar Panel Model Number (#): </Form.Label>
            <Form.Control
              className="form-input"
              type="text"
              placeholder="Enter Solar Panel Model Number (#)"
              name="SolarModelNumber"
              {...register("message", {
                required: <span className="required-text">* Required</span>,
              })}
              />
              {errors.message && errors.message.message}
          </Form.Group>

          <Form.Group className="Portal-text" controlId="formBasicEstimatedMeth">
            <Form.Label>Method of Measurement: </Form.Label>
            <Form.Control
              className="form-input"
              type="text"
              placeholder="Enter Method of Measurement"
              name="MethodMeasurement"
              {...register("message", {
                required: <span className="required-text">* Required</span>,
              })}
              />
              {errors.message && errors.message.message}
          </Form.Group>

          <Form.Group className="Portal-text" controlId="formBasicEstimatedMeth">
            <Form.Label>Frequency of Measurement: </Form.Label>
            <Form.Control
              className="form-input"
              type="text"
              placeholder="Enter Frequency of Measurement"
              name="FrequencyMeasurement"
              {...register("message", {
                required: <span className="required-text">* Required</span>,
              })}
              />
              {errors.message && errors.message.message}
          </Form.Group>
        
          <Form.Group className="Portal-text" controlId="formDocumentUpload">
            <Form.Label>
                    Inspection documentation / certificates
                    <OverlayTrigger placement="right" overlay={ 
                        <Tooltip id="tooltip-right" className="info-box">
                            Please upload any inspection documentation or supporting certificates.
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
      
          <Form.Group className="Portal-text" controlId="formDocumentUpload">
            <Form.Label>
                Solar Panel Purchase Receipts / Documentations
                    <OverlayTrigger placement="right" overlay={ 
                        <Tooltip id="tooltip-right" className="info-box">
                            Please upload any purchase receipts or supporting documentation 
                            (e.g. metering logs, manufacturer docs).
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

        <Button className="Button" variant="primary" type="submit" onClick={handleSubmit}>
        Next
        </Button>
    </Form>
    </div>
    </div>
  );
}
export default PG3;