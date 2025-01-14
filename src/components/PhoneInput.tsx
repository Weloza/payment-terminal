'use client'

import { useField } from 'formik';
import React, { useState } from 'react';
import styled from 'styled-components';

const CustomInput = styled.input`
  margin: 10px 0;
  padding: 10px;
  width: 250px;
  border: 1px solid #ccc;
  border-radius: 5px;
  color: black;
`;

const StyledErrorMessage = styled.div`
  color: red;
`;

const PhoneInput = ({ ...props }) => {
  const [field, meta] = useField(props);
  const [phone, setPhone] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    if (input === '8(') {
      field.onChange(event);
      return setPhone('');
    }
    const formattedInput = input.replace(/[^\d]/g, '');
    let maskedInput = '';

    if (formattedInput.length === 1) {
        maskedInput += '8(' + formattedInput;
    }
    if (formattedInput.length > 1) {
        maskedInput += '8(' + formattedInput.slice(1, 4);
    }
    if (formattedInput.length >= 5) {
        maskedInput += ') ' + formattedInput.slice(4, 7);
    }
    if (formattedInput.length >= 8) {
        maskedInput += '-' + formattedInput.slice(7, 11);
    }

    setPhone(maskedInput);
    field.onChange(event);
  };

  return (
    <>
      <label htmlFor={props.name}>{props.label}</label>
      <CustomInput
        {...field}
        {...props}
        value={phone}
        onChange={handleChange}
        placeholder={props.placeholder}
      />
      {meta.touched && meta.error ? (
        <StyledErrorMessage>
          {meta.error}
        </StyledErrorMessage>
      ) : null}
    </>
  );
};

export default PhoneInput;