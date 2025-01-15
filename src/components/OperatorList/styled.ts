import styled from 'styled-components';

export const ListContainer = styled.div`
  margin: 15px;
  padding: 15px;
  max-height: 70%;
  max-width: 70%;
  min-width: 30%;
  display: flex;
  justify-content: center;
  text-align: center;
  background-color: rgba(199, 199, 208, 0.4);
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  @media only screen 
  and (min-width : 500px) 
  and (max-width : 1500px) {
    min-width: 450px;
  }

  @media only screen 
  and (min-width : 240px) 
  and (max-width : 500px) {
    min-width: 240px;
  }
`;

export const Header = styled.h1`
  color: black;
  margin: 15px;
  font-size: 25px;
  font-weight: 500;
  font-family: Moririse2;
`;

export const OperatorButton = styled.button`
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
  box-sizing: border-box;
  text-align: center;

  &:hover {
    background:rgb(235, 223, 223, 0.7);
  }
`;

export const Icon = styled.img`
  border-radius: 30px;
  height: 70px;
  width: 90px;
`;
