'use client'

import { useField } from 'formik';
import React, { useState } from 'react';
import { CustomInput, CustomLabel, StyledErrorMessage } from './styled';

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
      <CustomLabel htmlFor={props.name}>{props.label}</CustomLabel>
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
