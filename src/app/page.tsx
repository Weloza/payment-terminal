'use client'

import React from 'react';
import { Main, MainContainer, MainTitle, SecondaryTitle, StyledFooter } from './styled';
import { Marquee, OperatorList } from '@/components';

const PAYMENT = 'Оплата связи';
const HEADER_TEXT = 'Легко, быстро и без лишних заморочек!';
const MARQUEE_TEXT = 'Легкая Оплата * Безопасные Транзакции * Мгновенные Уведомления * Простота Использования * ';

const Home: React.FC = () => {
  return (
    <MainContainer>
      <header>
        <MainTitle>{PAYMENT}</MainTitle>
        <SecondaryTitle>{HEADER_TEXT}</SecondaryTitle>
      </header>
      <Main>
        <OperatorList />
      </Main>
      <StyledFooter>
        <Marquee text={MARQUEE_TEXT} />
      </StyledFooter>
    </MainContainer>
  );
};

export default Home;
