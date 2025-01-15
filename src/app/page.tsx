'use client'

import React from 'react';
import { MainContainer, MainHeader, MenuContainer, SecondaryHeader } from './styled';
import { Marquee, OperatorList } from '@/components';

const PAYMENT = 'Оплата связи';
const HEADER_TEXT = 'Легко, быстро и без лишних заморочек!';
const MARQUEE_TEXT = 'Легкая Оплата * Безопасные Транзакции * Мгновенные Уведомления * Простота Использования * ';

const Home: React.FC = () => {
  return (
    <MainContainer>
      <MainHeader>{PAYMENT}</MainHeader>
      <SecondaryHeader>{HEADER_TEXT}</SecondaryHeader>
      <MenuContainer>
        <OperatorList />
      </MenuContainer>
      <Marquee text={MARQUEE_TEXT} />
    </MainContainer>
  );
};

export default Home;
