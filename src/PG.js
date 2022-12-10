import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './portal.css';
import { Form , Button, InputGroup } from 'react-bootstrap';
import { NavLink, Routes, Route } from "react-router-dom"

function PG() {
    const handleSubmit = (event) => {
        // Prevent the default behavior of the button
         event.preventDefault();
      
        /// Prevent the page from being refreshed when the button is clicked
        event.currentTarget.submit();
      
        /*  // Get the input element that contains the file(s)
        const fileInput = event.target.querySelector('#formDocumentUpload input[type="file"]');
        // Get the selected files
        const files = fileInput.files;
      
        // Process the selected files in some way (e.g. upload them to a server, or save them to a database)
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          // Do something with the file (e.g. upload it to a server)
          // ... */
      
        // Once the file has been processed, you can update the URL to redirect the user to the new page
        window.location.href = '.src/About';
      }

  return (
    <div>
    <div>
          <p className="description-text"> Please submit your information below: </p>
      </div>
    <div className="Portal-box">
    <Form onClick={handleSubmit}>
      <Form.Group className="Portal-text" controlId="formBasicEmail">
        <Form.Label>IP Addresses: </Form.Label>
        <Form.Control className="form-input" type="text" placeholder="Enter IPs (seperated by commas)" />
      </Form.Group>
      <Form.Group className="Portal-text" controlId="formBasicEmail">
        <Form.Label>Utility Provider: </Form.Label>
        <Form.Control className="form-input" type="text" placeholder="Enter Utility Provider" />
      </Form.Group>
      <Form.Group className="Portal-text" controlId="formBasicEmail">
        <Form.Label>Reference / Bill ID Number: </Form.Label>
        <Form.Control className="form-input" type="text" placeholder="Enter Ref/Bill #" />
      </Form.Group>
      <Form.Group className="Portal-text" controlId="formBasicEmail">
        <Form.Label>Estimated Annual Use (kWh): </Form.Label>
        <Form.Control className="form-input" type="text" placeholder="Enter Estimated Annual Use (kWh)" />
      </Form.Group>
      
      <Form.Group className="Portal-text" controlId="formDocumentUpload">
        <Form.Label>Upload Utility Bills:</Form.Label>
        <InputGroup>
          <Form.Control className="form-input" type="file" accept=".pdf, .doc, .docx, .png, .jpeg" multiple />
        </InputGroup>
      </Form.Group>
      <Button className="Button" variant="primary" type="submit">
          Next
      </Button>
    </Form> 
    </div>
    </div>
  );
}
export default PG;



