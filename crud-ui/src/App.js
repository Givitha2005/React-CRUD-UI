import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>React</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" >Create</Nav.Link>
            <Nav.Link as={Link} to="/read" >Read</Nav.Link>
            <Nav.Link as={Link} to="/update">Update</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='center'>
      <h1>CRUD Operation</h1>
      </div>
      <Routes>
        <Route exact path="/" element={<Create/>}></Route>
        <Route exact path="/read" element={<Read/>}></Route>
        <Route exact path="/update" element={<Update/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
