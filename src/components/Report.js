import React from 'react';
import styled from 'styled-components';
import { ReceiptData } from './ReceiptData';
import { colors } from '../lib/colors';

const Report = ({ dataExists, receiptData }) => {
  return (
    <ReportContainer data={dataExists ? "true" : "false"}>
      <ReportHeader>
        <Heading>Receipt Data</Heading>
      </ReportHeader>
      <ReportBody>
        {receiptData && <ReceiptData data={receiptData} />}
      </ReportBody>
    </ReportContainer>
  );
};

const Heading = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: ${colors.black};
  margin: 10px 0;
`;

const ReportContainer = styled.div`
  width: 50%;
  height: ${props => props.data === "true" ? '750px' : 'auto'};
  min-height: 500px;
  max-height: 750px;
  margin: 0px 0px 0px 50px;
  background-color: rgba(242, 239, 234, 0.4);
  display: flex;
  border-radius: 5px;
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    width: 80%;
    margin: 50px 0px 0px 0px;
  }
`;

const ReportHeader = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ReportBody = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export { Report };
