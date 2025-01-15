import styled from 'styled-components';

export const CustomInput = styled.input`
  margin: 5px 0;
  padding: 12px;
  min-width: 115%;
  border: 1px solid #ccc;
  border-radius: 5px;
  color: black;
  box-sizing: border-box;

  @media only screen 
  and (min-width : 150px) 
  and (max-width : 255px) {
    width: 80%;
  }
`;

export const CustomLabel = styled.label`
  font-size: 1.2em;
`;

export const StyledErrorMessage = styled.div`
  color: red;
`;
