import { Form } from 'formik';
import styled from 'styled-components';

export const Button = styled.button`
  padding: 15px 15px;
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

export const FormContainer = styled.div`
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
export const FormCustom = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  max-width: 95%;
`;

export const MainHeader = styled.h1`
  text-align: center;
  font-size: 2em;
  color: black;
  font-weight: bold;
`;

export const StyledMessage = styled.p<{ result: string }>`
  color: ${(props) => (props.result === 'true') ? "green" : "red"};
  text-align: center;
`;
