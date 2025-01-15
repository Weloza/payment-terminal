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
  background-color: rgba(199, 199, 208, 0.6);
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  @media only screen 
  and (min-width : 450px) 
  and (max-width : 1500px) {
    min-width: 445px;
  }

  @media only screen 
  and (min-width : 400px) 
  and (max-width : 450px) {
    min-width: 395px;
  }

  @media only screen 
  and (min-width : 350px) 
  and (max-width : 400px) {
    min-width: 345px;
  }

  @media only screen 
  and (min-width : 300px) 
  and (max-width : 350px) {
    min-width: 295px;
  }

  @media only screen 
  and (min-width : 250px) 
  and (max-width : 300px) {
    min-width: 245px;
  }

  @media only screen 
  and (min-width : 200px) 
  and (max-width : 250px) {
    min-width: 195px;
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
  min-width: 50%;
  padding: 15px 5px;
  margin-bottom: 8px;
  font-size: 25px;
  font-weight: 500;
  font-family: Moririse2;
  cursor: pointer;
  border: 1px solid black;
  color: black;
  border-radius: 5px;
  transition: background-color 0.3s;
  background: transparent;
  box-sizing: border-box;
  text-align: center;

  &:hover {
    background:rgb(235, 223, 223, 0.9);
  }
`;

export const Icon = styled.img`
  border-radius: 10px;
  height: 70px;
  width: 90px;
`;
