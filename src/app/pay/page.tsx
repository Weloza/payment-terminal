'use client'

import React, { lazy, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import styled from 'styled-components';
import Loader from '@/components/Loader';

const PaymentForm = lazy(() => import('../../components/PaymentForm'));

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

const PayPage: React.FC = () => {
  const searchParams = useSearchParams();
  const operator = searchParams.get('query');;

  if (!operator) {
    return (
      <StyledError>
        Ошибка загрузки. Вернитесь на главную страницу и попробуйте снова.
      </StyledError>
    );
  }

  return (
    <Container>
      <Suspense fallback={<Loader />}>
        <PaymentForm operator={operator as string} />
      </Suspense>
    </Container>
  );
};

export default PayPage;
