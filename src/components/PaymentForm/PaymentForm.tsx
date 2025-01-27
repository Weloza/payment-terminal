/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React, { useState } from 'react';
import { toFormikValidationSchema } from "zod-formik-adapter";
import { Formik } from 'formik';
import { Article, Button, FormContainer, FormCustom, MainHeader, StyledMessage } from './styled';
import { LogoImage } from '../LogoImage';
import { PaymentFormSchema } from '@/schemas/PaymentFormSchema';
import { PhoneInput } from '../PhoneInput';
import { SumInput } from '../SumInput';
import { Operator } from '@/data/mockData';

const SUCCESS_COLOR = 'green';
const ERROR_COLOR = 'red';
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

export const PaymentForm: React.FC<{ operator: Operator }> = ({ operator }) => {
  const [message, setMessage] = useState('');
  const [color, setColor] = useState('');
  const [loading, setLoading] = useState(false);

  const paymentOperation = (data: MyFormValues): Promise<boolean> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random() > 0.5;
        if (!success) {
          reject(ERROR_TEXT);
        }
        resolve(success);
      }, TIMEOUT_DELAY);
    });
  };

  const handleSubmit = async (data: MyFormValues) => {
    setLoading(true);
    setMessage('');
    try {
      const result = await paymentOperation(data);
      if (result) {
        setColor(SUCCESS_COLOR);
        setMessage(SUCCESS_TEXT);
        setTimeout(() => {
          window.location.href = '/';
        }, TIMEOUT_DELAY);
      }
    } catch (error: any) {
      setColor(ERROR_COLOR);
      setMessage(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormContainer>
      <Article>
        <LogoImage image={operator.image} alt={operator.title} loading={loading} />
        <MainHeader>{PAYMENT}{operator.title}</MainHeader>
      </Article>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        onSubmit={handleSubmit}
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
          color={color}
        >
          {message}
        </StyledMessage>
      )}
    </FormContainer>
  );
};
