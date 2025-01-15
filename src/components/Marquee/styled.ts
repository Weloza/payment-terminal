import styled from 'styled-components';

export const MarqueeContainer = styled.div`
  overflow: hidden;
  white-space: nowrap;
  box-sizing: border-box;
  width: 100%;
  height: 40%;
  background-color: #f0f0f0;
`;

export const MarqueeContent = styled.div`
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
