import React, {useState} from 'react';
import axios from 'axios';
import {BaseAPI_URL} from './URL';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [position, setPosition] = useState('');
  const [office, setOffice] = useState('');
  const [salary, setSalary] = useState('');
  const navigate = useNavigate();

  const postData = async () => {
    await axios.post(BaseAPI_URL, {
      name,
      age,
      position,
      office, 
      salary
    })
    navigate("/read");
  }

  return (
    <>
    <div className='center'>
      <h3>Create</h3>
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
      
      <Button variant="primary" onClick={postData}>
        Submit
      </Button>
    </Form>
    </>
  )
}

export default Create;
