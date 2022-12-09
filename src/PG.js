import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './portal.css';
import { Form , Button, InputGroup } from 'react-bootstrap';

const API_KEY = 'cb5fbb83e4b448faa253fc947af59f7f';
const EXCHANGE_RATE_ENDPOINT = 'https://openexchangerates.org/api/latest.json';
const COIN_GECKO_URL = 'https://api.coingecko.com/api/v3/simple/price';

function PG() {
  const [exchangeRates, setExchangeRates] = useState({});
  const [filecoinPrice, setFilecoinPrice] = useState(null);
  const [ethereumPrice, setEthereumPrice] = useState(null);
  const [priceRatio, setPriceRatio] = useState(null);
  const [MJFIL, setMJFIL] = useState(null);
  const [MJETH, setMJETH] = useState(null);

  const formatAsCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(value);
  }

  const formattedMJFIL = formatAsCurrency(MJFIL);
  const formattedFIL = formatAsCurrency(filecoinPrice);
  const formattedMJETH = formatAsCurrency(MJETH);
  const formattedETH = formatAsCurrency(ethereumPrice);
  
  
  const handleSubmit = (event) => {
    // Prevent the default behavior of the button
    event.preventDefault();
  
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
      window.location.href = '/About';
    }
  //}
  
  useEffect(() => {
    // Fetch the exchange rates from the EXCHANGE_RATE_ENDPOINT
    fetch(`${EXCHANGE_RATE_ENDPOINT}?app_id=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        // Set the exchange rates in the state
        setExchangeRates({
          USD_EUR: (data.rates.USD / data.rates.EUR).toFixed(3),
          EUR_USD: (data.rates.EUR / data.rates.USD).toFixed(3)
        });
      });

    // Fetch the current price of the cryptocurrency from the CRYPTO_ENDPOINT
    fetch(`${COIN_GECKO_URL}?ids=filecoin,ethereum&vs_currencies=usd`)
        .then(response => response.json())
        .then(data => {
            setFilecoinPrice(data.filecoin.usd);
            setEthereumPrice(data.ethereum.usd);
            setPriceRatio((data.ethereum.usd/data.filecoin.usd).toFixed(2))
            setMJFIL((data.filecoin.usd * 4050).toFixed(2))
            setMJETH((data.ethereum.usd * 32).toFixed(2))
        });
    }, []);

  return (
    <div>
    <div>
          <p className="description-text"> Please submit your information below: </p>
      </div>
    <div className="Portal-box">
    <Form>
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
      <Button className="Button" variant="primary" type="submit" onClick={handleSubmit}>
          Next
      </Button>
    </Form>

      <h3>Exchange Rates</h3>
      <p>USD/EUR: {exchangeRates.USD_EUR}</p>
      <p>EUR/USD: {exchangeRates.EUR_USD}</p>

      <h3>Cryptocurrency Price</h3>
      <p>Filecoin Price: {formattedFIL}</p>
      <p>Ethereum Price: {formattedETH}</p>
      <p>ETH/FIL: {priceRatio}</p>
      <p>MJ FIL: {formattedMJFIL}</p>
      <p>MJ ETH: {formattedMJETH}</p>  
      
    </div>
    </div>
  );
}
export default PG;



