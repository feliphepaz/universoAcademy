import React from 'react';
import './Input.css';

const Input = ({type, label, name, id, value, onChange, error, onBlur}) => {
  return (
    <div className='input-box'>
      <label htmlFor={name} className='label'>{label}</label>
      <input type={type} className='input' name={name} id={id} value={value} onChange={onChange} onBlur={onBlur}></input>
      {error ? <p className='error'>{error}</p> : ''}
    </div>
  )
}

export default Input
