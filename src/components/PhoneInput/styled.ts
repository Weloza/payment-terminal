import styled from 'styled-components';

export const CustomInput = styled.input`
  margin-top: 5px;
  margin-bottom: 15px;
  padding: 12px;
  min-width: 70%;
  border: 1px solid #ccc;
  border-radius: 5px;
  color: black;

  @media only screen 
  and (min-width : 320px) 
  and (max-width : 360px) {
    min-width: 95%;
    max-width: 100%;
  }

  @media only screen 
  and (min-width : 360px) 
  and (max-width : 400px) {
    min-width: 85%;
    max-width: 100%;
  }
`;

export const CustomLabel = styled.label`
  font-size: 1.2em;
`;

export const StyledErrorMessage = styled.div`
  color: red;
`;
