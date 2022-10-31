import * as React from 'react';
import './App.css';
import { NavLink, Routes, Route } from "react-router-dom"
import Portal from "./Portal"
import About from "./About"
import Main from "./Main"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className="App">
      <Navbar expand="lg" variant="light" bg="light">
       <Container className="NavBar">
          <Nav>
            <NavLink to="/" className="NavItem"><b>Home</b></NavLink> 
            <NavLink to="/About" className="NavItem"><b>About</b></NavLink> 
            <NavLink to="/Portal" className="NavItem"><b>Portal</b></NavLink> 
          </Nav>
        </Container>
      </Navbar>
        <div>
            <Routes>
              <Route exact path="/" element={<Main/>}/>
              <Route path="/About" element={ <About/> } />
              <Route path="/Portal" element={ <Portal/> } />
            </Routes>
      </div> 
    </div>
   
  );
  
}

export default App;

