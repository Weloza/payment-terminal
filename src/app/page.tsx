'use client'

import React from 'react';
import styled from 'styled-components';
import OperatorList from '../components/OperatorList';
import Marquee from '@/components/Marquee';

const MainHeader = styled.h2`
  text-align: center;
  font-size: 4em;
  color: white;
  font-weight: bold;
`;

const SecondaryHeader = styled.h3`
  text-align: center;
  font-size: 1.5em;
  color: white;
`;

const MenuContainer = styled.div`
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
  height: 90px;
  display: flex;
  justify-content: space-between;
  background-color: rgba(199, 199, 208, 0.5);
  border-radius: 30px;
`;

const MainContainer = styled.div`
  height: 700px;
  margin: 20px;
  background-image: url("/images/MainContainerBackground.jpeg");
  background-size: cover;
  background-repeat:no-repeat;
  background-position: center center;
  border-radius: 20px;
  display: grid;
`;

const Home: React.FC = () => {
  return (
    <MainContainer>
      <MainHeader>Оплата связи</MainHeader>
      <SecondaryHeader>Легко, быстро и без лишних заморочек!</SecondaryHeader>
      <MenuContainer>
        <OperatorList />
      </MenuContainer>
      <Marquee text="Легкая Оплата * Безопасные Транзакции * Мгновенные Уведомления * Простота Использования * " />
    </MainContainer>
  );
};

export default Home;
