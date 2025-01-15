'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import { Header, Icon, ListContainer, OperatorButton } from './styled';

const ICON_LINK = '/images/Operators.png';
const HEADER_TEXT = 'Выберите оператора для оплаты';

export const operators = ['МТС', 'Билайн', 'Мегафон'];

export const OperatorList: React.FC = () => {
  const router = useRouter();

  const handleSelectOperator = (operator: string) => {
    router.push(`/pay?query=${operator}`);
  };

  return (
    <ListContainer>
      <Icon src={ICON_LINK} />
      <Header>{HEADER_TEXT}</Header>
      {operators.map(operator => (
        <OperatorButton key={operator} onClick={() => handleSelectOperator(operator)}>
          {operator}
        </OperatorButton>
      ))}
    </ListContainer>
  );
};
