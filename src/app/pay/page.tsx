'use client'

import React from 'react';
import { useSearchParams } from 'next/navigation';
import PaymentForm from '../../components/PaymentForm';
import styled from 'styled-components';

const Container = styled.div`
  height: 700px;
  margin: 10px;
  background-image: url("/images/MainContainerBackground.jpeg");
  background-size: cover;
  background-repeat:no-repeat;
  background-position: center center;
  border-radius: 20px;
  display: grid;
  align-items: center;
  justify-content: center;
`

const PayPage: React.FC = () => {
  const searchParams = useSearchParams();
  const operator = searchParams.get('query');;

  if (!operator) {
    return <p>Загрузка...</p>;
  }

  return (
    <Container>
      <PaymentForm operator={operator as string} /> 
    </Container>
  );
};

export default PayPage;
