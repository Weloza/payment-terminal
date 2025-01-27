'use client'

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Container, StyledError } from './styled';
import { Loader, PaymentForm } from '@/components';
import { operators } from '@/data/mockData';

const ERROR_MESSAGE = 'Ошибка загрузки. Вернитесь на главную страницу и попробуйте снова.';

const InnerPayPage: React.FC = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const operator = operators.filter((operator) => operator.id === id)[0];

  if (!id || !operator) {
    return (
      <StyledError>
        {ERROR_MESSAGE}
      </StyledError>
    );
  }

  return (
    <Container>
      <PaymentForm operator={operator} />
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