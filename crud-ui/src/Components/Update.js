import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../App.css';
import axios from 'axios';
import {BaseAPI_URL} from './URL';
import { useNavigate } from 'react-router-dom';


const Update = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [position, setPosition] = useState('');
  const [office, setOffice] = useState('');
  const [salary, setSalary] = useState('');
  const navigate = useNavigate();

  const updateUser = async () => {
    await axios.put (BaseAPI_URL+"/"+ id, {id, name, age, position, office, salary}); 
    navigate ("/read")
  }

  useEffect (() => {
    setId(localStorage.getItem('id'))
    setName(localStorage.getItem('name'))
    setAge(localStorage.getItem('age'))
    setPosition(localStorage.getItem('position'))
    setOffice(localStorage.getItem('office'))
    setSalary(localStorage.getItem('salary'))

  }, [])

  return (
    <>
     <div className='center'>
      <h3>Update</h3>
      </div>
      <Form className='container form'>
      <Form.Group className="mb-3 col-md-4">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" value={name} 
        onChange={event =>setName(event.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3 col-md-4">
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" placeholder="Enter age" value={age} 
        onChange={event =>setAge(event.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3 col-md-4">
        <Form.Label>Position</Form.Label>
        <Form.Control type="text" placeholder="Enter job position" value={position} 
        onChange={event =>setPosition(event.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3 col-md-4">
        <Form.Label>Office</Form.Label>
        <Form.Control type="text" placeholder="Enter office name" value={office}
        onChange={event =>setOffice(event.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3 col-md-4">
        <Form.Label>Salary</Form.Label>
        <Form.Control type="number" placeholder="Enter salary" value={salary}
        onChange={event =>setSalary(event.target.value)} />
      </Form.Group>
      
      <Button onClick={updateUser} variant="primary">
        Update
      </Button>
    </Form>
    </>
  )
}

export default Update;
