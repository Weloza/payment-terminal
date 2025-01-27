'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import { Header, Icon, ListContainer, OperatorButton } from './styled';

const ICON_LINK = '/images/Operators.png';
const HEADER_TEXT = 'Выберите оператора для оплаты';

export type Operator = {
  id: string;
  title: string;
  image: string;
}

export const operators: Operator[] = [
  {
    id: 'mts',
    title: 'МТС',
    image: '/assets/mts.jpeg',
  },
  {
    id: 'beeline',
    title: 'Билайн',
    image: '/assets/beeline.jpeg',
  },
  {
    id: 'megafone',
    title: 'Мегафон',
    image: '/assets/megafone.jpeg',
  },
];

export const OperatorList: React.FC = () => {
  const router = useRouter();

  const handleSelectOperator = (operator: Operator) => {
    router.push(`/pay?id=${operator.id}&title=${operator.title}&image=${operator.image}`);
  };

  return (
    <ListContainer>
      <Icon src={ICON_LINK} />
      <Header>{HEADER_TEXT}</Header>
      {operators.map(operator => (
        <OperatorButton key={operator.id} onClick={() => handleSelectOperator(operator)}>
          {operator.title}
        </OperatorButton>
      ))}
    </ListContainer>
  );
};
