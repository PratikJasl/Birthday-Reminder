import './App.css'
import { Route, Routes, Link } from 'react-router-dom';
import Navigation from './components/Navbar';
import AddBirthday from './components/AddBirthday';
import BirthdayList from './components/BirthdayList';
import Home from './components/Home';
import React, { useState } from 'react'
import data from './backend/data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import UpcomingBirthdays from './components/UpcomingBirthdays';

function App() 
{
  function isWithinNextMonth(dateString){
    const currentDate = new Date();
    console.log("Current Date:", currentDate);
    const nextMonth = new Date();
    nextMonth.setMonth(currentDate.getMonth() + 1);
    console.log("Next Month:", nextMonth);

    return date >= currentDate && date < nextMonth;
  }

  function getUpcomingBirthdays(users){
    const upcomingBirthdays = users.filter((user) => {
    const birthday = new Date(user.birthdate); // Assuming user.birthdate is in MM/dd/yyyy format
    return isWithinNextMonth(birthday);
    });

    return upcomingBirthdays;
  }
  const [user, setUser] = useState(data);
  return (
    <>
      <Navigation/>
      
      <div id = 'components'>
        <Routes>
          <Route path="/" element={<Home/>} className = "Home"/>
          <Route path="/UpcomingBirthdays" element={<UpcomingBirthdays user = {user}/>} className = "UpcomingBirthdays"/>
          <Route path="/AddBirthday" element={<AddBirthday/>} className = "AddBirthday"/>
          <Route path="/BirthdayList" element={<BirthdayList user = {user}/>} className = "BirthdayList"/>
        </Routes>
      </div>
    </>
  );
}

export default App
