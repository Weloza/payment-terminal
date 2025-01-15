import { Form } from 'formik';
import styled from 'styled-components';

export const Button = styled.button`
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
    background:rgb(235, 223, 223, 0.7);
  }
`;

export const FormContainer = styled.div`
  margin-top: 40px;
  margin-left: 10px;
  height: 500px;
  width: 500px;
  display: flex;
  justify-content: center;
  background-color: rgba(199, 199, 208, 0.4);
  border-radius: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const FormCustom = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`;

export const MainHeader = styled.h1`
  text-align: center;
  font-size: 2em;
  color: black;
  font-weight: bold;
`;

export const StyledMessage = styled.p<{ result: string }>`
  color: ${(props) => (props.result === 'true') ? "green" : "red"};
`;
