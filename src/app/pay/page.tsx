'use client'

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import styled from 'styled-components';
import Loader from '@/components/Loader';
import PaymentForm from '@/components/PaymentForm';

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

const StyledError = styled.p`
  text-align: center;
  font-size: 20px;
  margin-top: 45vh;
`

const InnerPayPage: React.FC = () => {
  const searchParams = useSearchParams();
  const operator = searchParams.get('query');

  if (!operator) {
    return (
      <StyledError>
        Ошибка загрузки. Вернитесь на главную страницу и попробуйте снова.
      </StyledError>
    );
  }

  return (
    <Container>
      <PaymentForm operator={operator as string} />
    </Container>
  );
};

const PayPage: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <InnerPayPage />
    </Suspense>
  );
};

export default PayPage;
