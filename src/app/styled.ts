import styled from 'styled-components';

export const MainHeader = styled.h2`
  text-align: center;
  font-size: 4em;
  color: white;
  font-weight: bold;
`;

export const SecondaryHeader = styled.h3`
  text-align: center;
  font-size: 1.5em;
  color: white;
`;

export const MainContainer = styled.div`
  min-height: 100vh;
  background-image: url("/images/MainContainerBackground.jpeg");
  background-size: cover;
  background-repeat:no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
