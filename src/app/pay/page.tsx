'use client'

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Container, StyledError } from './styled';
import { Loader, Operator, PaymentForm } from '@/components';

const ERROR_MESSAGE = 'Ошибка загрузки. Вернитесь на главную страницу и попробуйте снова.';

const InnerPayPage: React.FC = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const title = searchParams.get('title');
  const image = searchParams.get('image');

  if (!id || !title || !image) {
    return (
      <StyledError>
        {ERROR_MESSAGE}
      </StyledError>
    );
  }

  const operator: Operator = {
    id,
    title,
    image,
  };

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