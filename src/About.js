import React from 'react';
import './App.css';
import Container from 'react-bootstrap/esm/Container';
import { FaHeart } from 'react-icons/fa';

function About() {
    return (
    <div className="App">
        <Container className='Box'>
            <div>
                <p>
                <b>The Reporting Portal is currently under construction.</b>
                </p>
            </div>
            <div>
                <p>As stated in the <a className="App-link" href="https://filecoin-green.gitbook.io/filecoin-green-documentation/" target="_blank" rel="noopener noreferrer" ><b>Storage Providers Green Guidance Documentation</b></a>, Filecoin Green is working on a comprehensive auditing process for all activity data, allowing SPs interested in making strong <a className="App-link" href="https://filecoin-green.gitbook.io/filecoin-green-documentation/readme-1/storage-providers-tiered-sustainability-claims" target="_blank" rel="noopener noreferrer"><b>sustainability claims</b></a> to publicly verify the associated data. We are building a <a className="App-link" href="https://filecoin-green.gitbook.io/filecoin-green-documentation/readme-1/additional-resources/annex-3-filecoin-green-reporting-portal" target="_blank" rel="noopener noreferrer"><b>Reporting Portal</b></a>, which is an upload utility that enables easy uploading of all relevant data to substantiate the configuration and performance of SPs operations.
                </p>
            </div>
            <div>
                <p>
                    While the Portal is under construction, please provide your contact information and submit requests for REC procurement: <a className="App-link" href="https://airtable.com/shr2Yn431Bfo8xPG8" target="_blank" rel="noopener noreferrer"><b>SP REC Request Form</b></a>.
                </p>
            </div>
            <div>
                <p>
                    Learn more about <a className="App-link" href="https://green.filecoin.io" target="_blank" rel="noopener noreferrer" ><b>Filecoin Green </b></a> and the <a className="App-link" href="https://filecoin-green.gitbook.io/filecoin-green-documentation/" target="_blank" rel="noopener noreferrer"><b>Green Guidance</b></a>.
                </p>
            </div>
            <div>
                <p>
                    Made with <FaHeart className= 'green'/> by the <a className="App-link" href="https://green.filecoin.io" target="_blank" rel="noopener noreferrer" ><b>Filecoin Green</b></a> team.
                </p>
            </div>
        </Container> 
    </div>
);
}

export default About;