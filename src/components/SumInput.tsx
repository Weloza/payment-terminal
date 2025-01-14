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

const SumInput = ({ ...props }) => {
  const [field, meta] = useField(props);
  const [sum, setSum] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    const maskedInput = input.replace(/^0+/, '');

    setSum(maskedInput);
    field.onChange(event);
  };

  return (
    <>
      <label htmlFor={props.name}>{props.label}</label>
      <CustomInput
        {...field}
        {...props}
        value={sum}
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

export default SumInput;
