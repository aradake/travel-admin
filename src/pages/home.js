import React, {useState, useEffect} from 'react';
import Select from 'react-select';
import './home.css';

const Home = () => {

  const [isVehicle, setIsVehicle] = useState(true);
  const [isEmployee, setIsEmployee] = useState(true);
  const [isDesignation, setIsDesignation] = useState(true);

  const getOptions = () => {
    if(isVehicle) {
      return [
        { value: 'tw', label: 'Two Wheeler' },
        { value: 'fw', label: 'Four Wheeler' }
      ];
    }
    if(isEmployee) {
      return [
        { value: 'eid', label: 'Employee Id' },
        { value: 'empcode', label: 'Employee Code' },
        { value: 'name', label: 'Employee Name' }
      ];
    }
    if(isDesignation) {
      return [
        { value: 'designation', label: 'Designation' }
      ];
    }
  }

  return (
    <div>
      <div class="row">
        <button class="left tile" onClick={() => {setIsEmployee(false);setIsDesignation(false);setIsVehicle(true);}} disabled={!isVehicle}>Vehicle Type</button>
        <button class="centre tile" onClick={() => {setIsVehicle(false);setIsDesignation(false);setIsEmployee(true);}} disabled={!isEmployee}>Employee</button>
        <button class="right tile" onClick={() => {setIsEmployee(false);setIsVehicle(false);setIsDesignation(true);}} disabled={!isDesignation}>Designation</button>
      </div>
    <Select options={getOptions()}>
    </Select>
    <div class="row submit-wrapper">
      <button class="tile">Submit</button>
    </div>
    </div>
  )
};
  
export default Home;