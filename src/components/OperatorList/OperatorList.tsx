'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import { Header, Icon, ListContainer, OperatorButton } from './styled';
import { operators } from '@/data/mockData';

const ICON_LINK = '/images/Operators.png';
const HEADER_TEXT = 'Выберите оператора для оплаты';

export const OperatorList: React.FC = () => {
  const router = useRouter();

  const handleSelectOperator = (id: string) => {
    router.push(`/pay?id=${id}`);
  };

  return (
    <ListContainer>
      <Icon src={ICON_LINK} />
      <Header>{HEADER_TEXT}</Header>
      {operators.map(operator => (
        <OperatorButton key={operator.id} onClick={() => handleSelectOperator(operator.id)}>
          {operator.title}
        </OperatorButton>
      ))}
    </ListContainer>
  );
};
