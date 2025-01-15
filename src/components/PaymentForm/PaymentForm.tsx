'use client'

import React, { useState } from 'react';
import { toFormikValidationSchema } from "zod-formik-adapter";
import { Formik} from 'formik';
import { Button, FormContainer, FormCustom, MainHeader, StyledMessage } from './styled';
import { LogoImage } from '../LogoImage';
import { PaymentFormSchema } from '@/schemas/PaymentFormSchema';
import { PhoneInput } from '../PhoneInput';
import { SumInput } from '../SumInput';

const TRUE_TEXT = 'true';
const FALSE_TEXT = 'false';
const SUCCESS_TEXT = 'Оплата успешно проведена!';
const ERROR_TEXT = 'Ошибка при проведении оплаты. Попробуйте снова.';
const TIMEOUT_DELAY = 2000;
const PAYMENT = 'Оплата ';
const PHONE_INPUT_NAME = 'phoneNumber';
const PHONE_INPUT_LABEL = 'Номер телефона';
const PHONE_INPUT_PLACEHOLDER = '8(XXX) XXX-XXXX';
const SUM_INPUT_NAME = 'sum';
const SUM_INPUT_LABEL = 'Сумма';
const SUM_INPUT_PLACEHOLDER = 'Сумма в рублях';
const BUTTON_TEXT = 'Оплатить';

interface MyFormValues {
  phoneNumber: string;
  sum: number;
}

const initialValues: MyFormValues = { phoneNumber: '', sum: 0 };

export const PaymentForm: React.FC<{ operator: string }> = ({ operator }) => {
  const [message, setMessage] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    setMessage('');
    const success = Math.random() > 0.5;

    if (success) {
      setTimeout(() => {
        setResult(TRUE_TEXT);
        setMessage(SUCCESS_TEXT);
        setLoading(false);
        setTimeout(() => {   
          window.location.href = '/';
        }, TIMEOUT_DELAY);
      }, TIMEOUT_DELAY)
    } else {
      setResult(FALSE_TEXT);
      setTimeout(() => {
        setMessage(ERROR_TEXT);
        setLoading(false);
      }, TIMEOUT_DELAY);
    }
  };

  return (
    <FormContainer>
      <LogoImage operator={operator} loading={loading} />
      <MainHeader>{PAYMENT}{operator}</MainHeader>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        onSubmit={() => handleSubmit()}
        validationSchema={toFormikValidationSchema(PaymentFormSchema)}
      >
        <FormCustom>
          <PhoneInput
            name={PHONE_INPUT_NAME}
            label={PHONE_INPUT_LABEL}
            type="text"
            placeholder={PHONE_INPUT_PLACEHOLDER}
          />
          <SumInput
            name={SUM_INPUT_NAME}
            label={SUM_INPUT_LABEL}
            type="number"
            placeholder={SUM_INPUT_PLACEHOLDER}
          />
          <Button type="submit">{BUTTON_TEXT}</Button>
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
