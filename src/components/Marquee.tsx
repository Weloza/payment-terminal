import React from 'react';
import styled from 'styled-components';

const MarqueeContainer = styled.div`
  overflow: hidden;
  white-space: nowrap;
  box-sizing: border-box;
  width: 100%;
  height: 40%;
  background-color: #f0f0f0;
`;

const MarqueeContent = styled.div`
  display: inline-block;
  animation: marquee 15s linear infinite;
  font-size: 3em;

  @keyframes marquee {
    0% {
      transform: translateX(-50%);
    }
    100% {
      transform: translateX(0%);
    }
  }
`;

interface MarqueeProps {
  text: string;
}

const Marquee: React.FC<MarqueeProps> = ({ text }) => {
  return (
    <MarqueeContainer>
      <MarqueeContent>
        <span>{text}</span>
        <span>{text}</span>
      </MarqueeContent>
    </MarqueeContainer>
  );
};

export default Marquee;