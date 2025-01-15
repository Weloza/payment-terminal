import styled from 'styled-components';

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 10px;
  margin-left: 20px;
`;

export const Header = styled.h1`
  color: black;
  margin: 15px;
  font-size: 25px;
  font-weight: 500;
  font-family: Moririse2;
`;

export const OperatorButton = styled.button`
  margin-left: 5%;
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

  &:hover {
    background:rgb(235, 223, 223, 0.5);
  }
`;

export const Icon = styled.img`
  border-radius: 30px;
  height: 70px;
  width: 90px;
`;
