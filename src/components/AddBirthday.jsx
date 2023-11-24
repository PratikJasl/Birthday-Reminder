import React, { useState, useEffect } from "react";
import { Row, Form, Button } from 'react-bootstrap';
import axios from "axios";
import DatePicker from "react-datepicker";
import { format } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {uploadFileToIPFS} from '../backend/uploadIPFS';
function AddBirthday(){
  const [selectedDate, setSelectedDate] = useState(null);
  const [Name, setName] = useState('');
  const [imageUrl, setImageURL] = useState('');
  

  let res;
  let pinataURL;

  const handleDateChange = (date) => {
    date.setHours(0, 0, 0, 0);
    setSelectedDate(date);
  };

  const handleImageUpload = async(e) =>{
    e.preventDefault();
    let file = e.target.files[0];
    if(typeof file !== 'undefined')
    {
      try
      {
        res = await uploadFileToIPFS(file);
        pinataURL = res.pinataURL;
        setImageURL(pinataURL);
        console.log("Response:", res);
        console.log("pinataUrl:",pinataURL);
      } 
      catch (error) 
      {
        console.error('Error uploading file:', error);
      }
    }
  }

  const handleFormSubmit = async() =>{
    const formData = new FormData();

    console.log("Form Data before:", FormData);
    console.log("imageURL:", imageUrl);

    const formattedDate = selectedDate ? format(selectedDate, 'MM/dd/yyyy') : '';

    formData.append('name', Name);
    formData.append('birthdate', formattedDate);
    formData.append('imageURL', imageUrl);

    console.log("Form Data:",formData);

    try{
      const response = await axios.post('http://localhost:3000/submit',formData,{
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

    }catch(error){
      console.log("Error Submitting Form:",error);
    }

  }

    return(
      <div className="container-fluid mt-5">
        <h4>List the Birthdays of Your Loved Once</h4>
        <div className="row">
          <main role="main" className="col-lg-12 mx-auto" style={{ maxWidth: '1000px' }}>
            <div className="content mx-auto">
              <Row className="g-4">
                <Form.Control
                  type="file"
                  required
                  name="file"
                  onChange={handleImageUpload}
                />
                <Form.Control onChange={(e)=>{setName(e.target.value)}} required type="text" placeholder="Enter Name" />
                <DatePicker 
                selected={selectedDate} 
                onChange={handleDateChange}
                dateFormat="MM/dd/yyyy"
                placeholderText="Enter Birthdate - MM/dd/yyy"
                size="lg"
                required
                className="form-control" 
                />
                <div className="d-grid px-0">
                  <Button variant="primary" size="lg" onClick={handleFormSubmit}>
                  Submit
                  </Button>
                </div>
              </Row>
            </div>
          </main>
        </div>
      </div>
    );
}

export default AddBirthday