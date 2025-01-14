'use client'

import * as React from 'react';
import { toFormikValidationSchema } from "zod-formik-adapter";
import {
  Formik,
  Form,
} from 'formik';
import styled from 'styled-components';
import PhoneInput from './PhoneInput';
import SumInput from './SumInput';
import LogoImage from './LogoImage';
import PaymentFormSchema from '@/schemas/PaymentFormSchema';

const Button = styled.button`
  padding: 15px 30px;
  font-size: 25px;
  font-weight: 500;
  font-family: Moririse2;
  cursor: pointer;
  border: none;
  color: black;
  border-radius: 5px;
  transition: background-color 0.3s;

  background: transparent;

  &:hover {
    background:rgb(235, 223, 223, 0.5);
  }
`;

const FormContainer = styled.div`
  margin-top: 40px;
  margin-left: 10px;
  height: 500px;
  width: 500px;
  display: flex;
  justify-content: center;
  background-color: rgba(199, 199, 208, 0.4);
  border-radius: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const FormCustom = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`;

const MainHeader = styled.h1`
  text-align: center;
  font-size: 2em;
  color: black;
  font-weight: bold;
`;

const StyledMessage = styled.p<{ result: string }>`
  color: ${(props) => (props.result === 'true') ? "green" : "red"};
`;

interface MyFormValues {
  phoneNumber: string;
  sum: number;
}
const initialValues: MyFormValues = { phoneNumber: '', sum: 0 };

const PaymentForm: React.FC<{ operator: string }> = ({ operator }) => {
  const [message, setMessage] = React.useState('');
  const [result, setResult] = React.useState('');

  const handleSubmit = async (values: MyFormValues) => {
    const number = values.phoneNumber;
    console.log(number);

    const success = Math.random() > 0.5;

    if (success) {
      setResult('true');
      setMessage(`Оплата успешно проведена!`);
      setTimeout(() => {
        setMessage('true');
        window.location.href = '/';
      }, 2000);
    } else {
      setResult('false');
      setMessage('Ошибка при проведении оплаты. Попробуйте снова.');
      setTimeout(() => setMessage(''), 2000);
    }
  };

  return (
    <FormContainer>
      <LogoImage operator={operator as string} />
      <MainHeader>Оплата {operator}</MainHeader>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        onSubmit={(v) => handleSubmit(v)}
        validationSchema={toFormikValidationSchema(PaymentFormSchema)}
      >
        <FormCustom>
          <PhoneInput
            name="phoneNumber"
            label="Номер телефона"
            type="text"
            placeholder="8(XXX) XXX-XXXX"
          />
          <SumInput
            name="sum"
            label="Сумма"
            type="number"
            placeholder="Сумма в рублях"
          />
          <Button type="submit">Оплатить</Button>
        </FormCustom>
      </Formik>
      {message && (
        <StyledMessage
          result={result}
        >
          {message}
        </StyledMessage>
      )}
    </FormContainer>
  );
};

export default PaymentForm;
