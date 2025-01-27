'use client'

import React from 'react';
import { Main, MainContainer, MainHeader, SecondaryHeader } from './styled';
import { Marquee, OperatorList } from '@/components';

const PAYMENT = 'Оплата связи';
const HEADER_TEXT = 'Легко, быстро и без лишних заморочек!';
const MARQUEE_TEXT = 'Легкая Оплата * Безопасные Транзакции * Мгновенные Уведомления * Простота Использования * ';

const Home: React.FC = () => {
  return (
    <MainContainer>
      <header>
        <MainHeader>{PAYMENT}</MainHeader>
        <SecondaryHeader>{HEADER_TEXT}</SecondaryHeader>
      </header>
      <Main>
        <OperatorList />
      </Main>
      <footer>
        <Marquee text={MARQUEE_TEXT} />
      </footer>
    </MainContainer>
  );
};

export default Home;
