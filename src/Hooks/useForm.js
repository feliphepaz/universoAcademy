import React from 'react'

const types = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Preencha um e-mail válido.'
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/,
    message: 'A senha precisa ter no mínimo 8 caracteres, 1 número e 1 carácter especial.'
  }
}

const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  function onChange({ target }) {
    if (error) validate(value);
    setValue(target.value);
  }

  function validate(value) {
    if (type === false) return true;
    if (value.lenght === 0) {
      setError('Preencha um valor');
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  return ({
    value,
    error,
    setValue,
    onChange,
    validate: () => validate(value),
    onBlur: () => validate(value),
  })
}

export default useForm
