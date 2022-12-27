import React from 'react';
import './App.css';
import { NavLink, Routes, Route } from "react-router-dom"
import Portal from "./Portal"
import About from "./About"
import Main from "./Main"
import PG from "./PG"
import PG2 from "./PG2"
import PG3 from "./PG3"
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
            <NavLink to="/PG" className="NavItem"><b>P1</b></NavLink>
            <NavLink to="/PG2" className="NavItem"><b>P2</b></NavLink>
            <NavLink to="/PG3" className="NavItem"><b>P3</b></NavLink>
          </Nav>
        </Container>
      </Navbar>
        <div>
            <Routes>
              <Route exact path="/" element={<Main/>}/>
              <Route path="/About" element={ <About/> } />
              <Route path="/Portal" element={ <Portal/> } />
              <Route path="/PG" element={ <PG/> } />
              <Route path="/PG2" element={ <PG2/> } />
              <Route path="/PG3" element={ <PG3/> } />
            </Routes>
        </div> 
    </div>
   
  );
}

export default App; 

