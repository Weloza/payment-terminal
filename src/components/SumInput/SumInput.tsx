'use client'

import { useField } from 'formik';
import React, { useState } from 'react';
import { CustomInput, StyledErrorMessage } from './styled';

export const SumInput = ({ ...props }) => {
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
