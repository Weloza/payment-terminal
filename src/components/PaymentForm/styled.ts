import { Form } from 'formik';
import styled from 'styled-components';

export const Button = styled.button`
  margin-top: 10px;
  padding: 10px;
  font-size: 2em;
  font-weight: 100;
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
    background:rgb(235, 223, 223, 0.7);
  }

  @media only screen 
  and (min-width : 150px) 
  and (max-width : 255px) {
    width: 80%;
    font-size: 0.8em;
    padding: 4px;
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
  background-color: rgba(199, 199, 208, 0.6);
  border-radius: 50px;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;

  @media only screen 
  and (min-width : 450px) 
  and (max-width : 1500px) {
    min-width: 445px;
  }

  @media only screen 
  and (min-width : 430px) 
  and (max-width : 450px) {
    min-width: 425px;
  }

  @media only screen 
  and (min-width : 400px) 
  and (max-width : 430px) {
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
