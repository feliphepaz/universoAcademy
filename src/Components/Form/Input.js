import React from 'react';
import './Input.css';

const Input = ({type, label, name, value, change}) => {
  return (
    <div className='input-box'>
      <label htmlFor={name} className='label'>{label}</label>
      <input type={type} className='input' name={name} value={value} onChange={change}></input>
    </div>
  )
}

export default Input
