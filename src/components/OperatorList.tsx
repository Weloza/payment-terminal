'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

const operators = ['МТС', 'Билайн', 'Мегафон'];

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: max-content max-content max-content max-content max-content;
  align-items: stretch;
  margin: 10px;
  margin-left: 20px;
`;

const Header = styled.h1`
  color: black;
  margin: 15px;
  font-size: 25px;
  font-weight: 500;
  font-family: Moririse2;
`;

const OperatorButton = styled.button`
  margin-left: 150px;
  padding: 15px 30px;
  font-size: 25px;
  font-weight: 500;
  font-family: Moririse2;
  cursor: pointer;
  border: none;
  color: black;
  border-radius: 5px;
  transition: background-color 0.3s;

  background: transparent;

  &:hover {
    background:rgb(235, 223, 223, 0.5);
  }
`;

const Icon = styled.img`
  border-radius: 30px;
  height: 70px;
  width: 90px;
`;

const OperatorList: React.FC = () => {
  const router = useRouter();

  const handleSelectOperator = (operator: string) => {
    router.push(`/pay?query=${operator}`);
  };

  return (
    <ListContainer>
      <Icon src="/images/Operators.png" />
      <Header>Выберите оператора для оплаты</Header>
      {operators.map(operator => (
        <OperatorButton key={operator} onClick={() => handleSelectOperator(operator)}>
          {operator}
        </OperatorButton>
      ))}
    </ListContainer>
  );
};

export default OperatorList;
