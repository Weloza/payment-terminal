import React from 'react';
import { MarqueeContainer, MarqueeContent } from './styled';

interface MarqueeProps {
  text: string;
}

export const Marquee: React.FC<MarqueeProps> = ({ text }) => {
  return (
    <MarqueeContainer>
      <MarqueeContent>
        <span>{text}</span>
      </MarqueeContent>
    </MarqueeContainer>
  );
};
