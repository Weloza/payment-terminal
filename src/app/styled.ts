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

export const MenuContainer = styled.div`
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
  height: 90px;
  display: flex;
  justify-content: space-between;
  background-color: rgba(199, 199, 208, 0.5);
  border-radius: 30px;
`;

export const MainContainer = styled.div`
  height: 700px;
  margin: 20px;
  background-image: url("/images/MainContainerBackground.jpeg");
  background-size: cover;
  background-repeat:no-repeat;
  background-position: center center;
  border-radius: 20px;
  display: grid;
`;
