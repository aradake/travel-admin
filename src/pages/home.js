import React, {useState, useEffect} from 'react';
import Select from 'react-select';
import './home.css';
import { render } from '@testing-library/react';
import Events from './events';
import {Link, Routes, Route, useNavigate, Navigate} from 'react-router-dom';
import { result } from 'lodash';


const Home = () => {

  const navigate = useNavigate();
  const [isVehicle, setIsVehicle] = useState(true);
  const [isEmployee, setIsEmployee] = useState(true);
  const [isDesignation, setIsDesignation] = useState(true);
  const [startDate, setStartDate] = useState(new Date());
  const getYear = [{ value: '2023', label: '2023' }, {value: '2024', label: '2024' }, {value: '2025', label: '2025' }, {value: '2026', label: '2026' }, {value: '2027', label: '2027' }, {value: '2028', label: '2028'}, {value: '2029', label: '2029' }, {value: '2030', label: '2030' }, {value: '2031', label: '2031' }, {value: '2032', label: '2032' }, {value: '2033', label: '2033' }, {value: '2034', label: '2034' }, {value: '2035', label: '2035' }, {value: '2036', label: '2036' }, {value: '2037', label: '2037' }, {value: '2038', label: '2038' }, {value: '2039', label: '2039' }, {value: '2040', label: '2040' }];
  const getMonth = [
    { value: '1', label: 'January' },
    { value: '2', label: 'February' },
    { value: '3', label: 'March' },
    { value: '4', label: 'April' },
    { value: '5', label: 'May' },
    { value: '6', label: 'June' },
    { value: '7', label: 'July' },
    { value: '8', label: 'August' },
    { value: '9', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' },
  ];

  const getOptions = () => {
    if(isVehicle) {
      return [
        { value: 'tw', label: 'Two Wheeler' },
        { value: 'fw', label: 'Four Wheeler' }
      ];
    }
    if(isEmployee) {
      return [
        { value: 'name', label: 'Employee Name' },
        { value: 'all', label: 'All' }
      ];
    }
    if(isDesignation) {
    }
  }

  const [emploeeNameOptions, setEmploeeNameOptions] = useState([]);

  const [selected, setSelected] = useState(null);

  const [selectedEmployeeName, setSelectedEmployeeName] = useState(null);

  const [input, setInput] = useState(null);

  const handleInput = event => {
    setInput(event.target.value);

    console.log('value is:', event.target.value);
  };

  const handleChange = (selectedOption) => {
    setSelected(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };

  const handleEmployeeNameChange = (selectedOption) => {
    setSelectedEmployeeName(selectedOption);
    console.log(`Employee Name selected:`, selectedOption);
  }

  const [selectedMonth, setSelectedMonth] = useState(null);

  const handleMonthChange = (selectedOption) => {
    setSelectedMonth(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };

  const [selectedYear, setSelectedYear] = useState(null);

  const handleYearChange = (selectedOption) => {
    setSelectedYear(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };

  const onSubmit = () => {
    if(!selected || !selectedMonth || !selectedYear)
      return;
    const data = {selected: selected.value, selectedMonth: selectedMonth.value, selectedYear: selectedYear.value, input: selectedEmployeeName == null ? null : selectedEmployeeName.value};
    navigate('/events', {state:data});
  }

  useEffect(() => {

  const getEmployeeNames = async () => {
    const requestOptions = {
      method: 'GET'
    };
  
    const response = await fetch('https://travel-tracker-390818.el.r.appspot.com/api/td/us1/travel/employeeNames', requestOptions)
    const json = await response.json();
    var i = json.length;
    console.log('Names size = '+ i);

    let result = [];

    for(let k = 0; k < json.length; k++){   
            result.push({
            "value":json[k],
            "label":json[k]
        })
    }
    console.log('Names result = '+ result);
    setEmploeeNameOptions(result);
    return result
  };
  getEmployeeNames();
}, []);

  return (
    <div>
      <div class="row">
        <button class="left tile" onClick={() => {setIsEmployee(false);setIsDesignation(false);setIsVehicle(true);}} disabled={!isVehicle}>Vehicle Type</button>
        <button class="right tile" onClick={() => {setIsVehicle(false);setIsDesignation(false);setIsEmployee(true);}} disabled={!isEmployee}>Employee</button>
      </div>
    <Select options={getOptions()} onChange={handleChange}>
    </Select>
    <div class="selectMonth" className={!isEmployee? 'hidden' : undefined}>
    <Select options={emploeeNameOptions} className={!isEmployee? 'hidden' : undefined} onChange={handleEmployeeNameChange}></Select>
    </div>
    <div class="selectMonth">
    <Select class="month" options={getMonth} onChange={handleMonthChange}>
    </Select>
    </div>
    <div class="selectMonth">
    <Select class="year" options={getYear} onChange={handleYearChange}>
    </Select>
    </div>
    <div class="row submit-wrapper">
      <button class="tile" onClick={onSubmit}>Submit</button>
    </div>
    </div>
  )
};

export default Home;