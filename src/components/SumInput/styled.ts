import styled from 'styled-components';

export const CustomInput = styled.input`
  margin-top: 5px;
  margin-bottom: 10px;
  padding: 12px;
  min-width: 130%;
  border: 1px solid #ccc;
  border-radius: 5px;
  color: black;

  @media only screen 
  and (min-width : 150px) 
  and (max-width : 300px) {
    min-width: 95%;
    max-width: 100%;
  }

  @media only screen 
  and (min-width : 300px) 
  and (max-width : 360px) {
    min-width: 95%;
    max-width: 100%;
  }
`;

export const CustomLabel = styled.label`
  font-size: 1.2em;
`;

export const StyledErrorMessage = styled.div`
  color: red;
`;