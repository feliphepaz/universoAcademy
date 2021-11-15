import React from 'react';
import './Button.css';

const Button = ({children}) => {
  return (
    <button type='submit' className='button'>{children}</button>
  )
}

export default Button
