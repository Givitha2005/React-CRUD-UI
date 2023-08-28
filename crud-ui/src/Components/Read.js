import React, {useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import {BaseAPI_URL} from './URL';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Read = () => {
  const [apidata, setApiData] = useState([]);
  const navigate = useNavigate();

  const callGetApi = async () => {
    const response = await axios.get(BaseAPI_URL);
    setApiData (response.data);
  }

  const deleteUser = async (id) => {
  await axios.delete(BaseAPI_URL+"/"+ id)
  callGetApi() 
}

const updateUser = ({id, name, age, position, office, salary}) => {
localStorage.setItem('id', id)
localStorage.setItem('name', name)
localStorage.setItem('age', age)
localStorage.setItem('position', position)
localStorage.setItem('office', office)
localStorage.setItem('salary', salary)
navigate ("/update")
}

  useEffect (() => {
    callGetApi();
  }, [])
  return (
    <>
      <div className='center'>
      <h3>Read and Delete</h3>
      </div>
      <Table responsive="sm" className="container">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Position</th>
            <th>Office</th>
            <th>Salary</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {
            apidata.map(values => (
              <tr key={values.id}>
            <td>{values.id}</td>
            <td>{values.name}</td>
            <td>{values.age}</td>
            <td>{values.position}</td>
            <td>{values.office}</td>
            <td>{values.salary}</td>
            <td><Button onClick={() =>deleteUser(values.id)} variant="danger">Delete</Button></td>
            <td><Button onClick={() =>updateUser(values)} variant="warning">Update</Button></td>
            
          </tr>
            ))
          }
        </tbody>
      </Table>
    </>
  )
}

export default Read;
