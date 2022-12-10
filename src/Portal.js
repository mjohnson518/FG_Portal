import React from 'react';
import './App.css';
import './portal.css';
import { Form , Button, InputGroup } from 'react-bootstrap';


function PortalForm() {
  
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
    window.location.href = '/PG';
  }
  //}

  return (
   <div>
    <div>
          <p className="description-text"> Please submit your information below: </p>
      </div>
    <div className="Portal-box">
    <Form>
      <Form.Group className="Portal-text" controlId="formBasicEmail">
        <Form.Label>Storage Provider Name: </Form.Label>
        <Form.Control className="form-input" type="text" placeholder="Enter SP Name" />
      </Form.Group>

      <Form.Group className="Portal-text" controlId="formBasicEmail">
        <Form.Label>Country: </Form.Label>
        <Form.Control className="form-input" type="text" placeholder="Enter Country" />
      </Form.Group>

      <Form.Group className="Portal-text" controlId="formBasicEmail">
        <Form.Label>Region/State: </Form.Label>
        <Form.Control className="form-input" type="text" placeholder="Enter Region/State" />
      </Form.Group>

      <Form.Group className="Portal-text" controlId="formBasicEmail">
        <Form.Label>City: </Form.Label>
        <Form.Control className="form-input" type="text" placeholder="Enter City" />
      </Form.Group>

      <Form.Group className="Portal-text" controlId="formBasicEmail">
        <Form.Label>Address: </Form.Label>
        <Form.Control className="form-input" type="text" placeholder="Enter Address" />
      </Form.Group>

      <Form.Group className="Portal-text" controlId="formBasicEmail">
        <Form.Label>Zip/Postal Code: </Form.Label>
        <Form.Control className="form-input" type="text" placeholder="Enter Zip/Postal Code" />
      </Form.Group>
      
      <Form.Group className="Portal-text" controlId="formBasicEmail">
        <Form.Label>Email address: </Form.Label>
        <Form.Control className="form-input" type="email" placeholder="Enter email" />
      </Form.Group>
      
      <Form.Group className="Portal-text" controlId="formBasicPassword">
        <Form.Label>Password: </Form.Label>
        <Form.Control className="form-input" type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="Portal-text" controlId="formBasicEmail">
        <Form.Label>MinerIDs: </Form.Label>
        <Form.Control className="form-input" type="text" placeholder="Enter MinerIDs (seperated by commas)" />
      </Form.Group>

      <Form.Group className="Portal-text" controlId="formDocumentUpload">
        <Form.Label>Upload:</Form.Label>
        <InputGroup>
          <Form.Control className="form-input" type="file" accept=".pdf, .doc, .docx, .png, .jpeg" multiple />
        </InputGroup>
      </Form.Group>

      <Form.Group className="Portal-text" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Form.Group onSubmit={handleSubmit}>
        <Button className="Button" variant="primary" type="submit">
          Next
        </Button>
      </Form.Group>
    </Form>
    </div>
    </div>
  );
}
  
export default PortalForm;
