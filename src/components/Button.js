import React from 'react';
import styled from 'styled-components';
import { colors } from '../lib/colors';

const Button = ({ children, ...props }) => {
  return (
    <ButtonContainer {...props}>
      {children}
    </ButtonContainer>
  );
}

const ButtonContainer = styled.button`
  width: 200px;
  height: 41px;
  min-height: 41px;
  border-radius: 2px;
  color: ${colors.white};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  background-color: ${props => {
    if (props.error === "true") {
      return colors.red;
    } else if (props.image === "true") {
      return colors.blue;
    } else {
      return colors.green;
    }
  }};
  
  border: 1px solid ${props => {
    if (props.error === "true") {
      return colors.red;
    } else if (props.image === "true") {
      return colors.blue;
    } else {
      return colors.green;
    }
  }};

  &:hover {
    opacity: 0.8;
  }
`;

export { Button };