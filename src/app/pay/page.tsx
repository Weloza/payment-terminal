'use client'

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Container, StyledError } from './styled';
import { Loader, PaymentForm } from '@/components';

const ERROR_MESSAGE = 'Ошибка загрузки. Вернитесь на главную страницу и попробуйте снова.';

export const InnerPayPage: React.FC = () => {
  const searchParams = useSearchParams();
  const operator = searchParams.get('query');

  if (!operator) {
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