import React from 'react';
import styled, { keyframes } from 'styled-components';

const ProgressBar = () => {
  return (
    <ProgressBarContainer />
  )
};

const pulse = keyframes`
  0% {
    width: 0%;
    opacity: 0.3;
  }
  50% {
    width: 100%;
    opacity: 1;
  }
  100% {
    width: 0%;
    opacity: 0.3;
  }
`;

const ProgressBarContainer = styled.div`
  width: 60%;
  height: 8px;
  min-height: 8px;
  position: relative;
  background-color: #f0f0f0;
  border-radius: 4px;

  &::before {
    content: "";
    height: 8px;
    min-height: 8px;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 4px;
    background-color: #0099ff;
    animation: ${pulse} 8s infinite ease-in-out;
  }
`;

export { ProgressBar };