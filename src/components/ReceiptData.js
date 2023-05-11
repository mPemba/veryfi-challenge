import React from 'react';
import styled from 'styled-components';
import { colors } from '../lib/colors';

const ReceiptData = ({ data }) => {
  return (
    <Content>
      <LogoContainer>
        {data.vendor.logo && <Logo src={data.vendor.logo} />}
      </LogoContainer>
      <ReceiptDataContainer>
        <SubHeading>Summary</SubHeading>
        <Item>
          <ItemLabel>Vendor:</ItemLabel>
          <ItemValue>{data.vendor.raw_name}</ItemValue>
        </Item>
        <Item>
          <ItemLabel>Purchase Date:</ItemLabel>
          <ItemValue>{new Date(data.date).toLocaleDateString()}</ItemValue>
        </Item>
        <Item>
          <ItemLabel>Total:</ItemLabel>
          <ItemValue>${data.total.toFixed(2)}</ItemValue>
        </Item>

        <SubHeading>Item Info</SubHeading>
        {data.line_items.map((item, index) => {
          if (!item.total) return null;
          return (
            <span key={index}>
              <Item>
                <ItemLabel>Item:</ItemLabel>
                <ItemValue>{item.description}</ItemValue>
              </Item>
              <Item>
                <ItemLabel>Quantity:</ItemLabel>
                <ItemValue>{item.quantity}</ItemValue>
              </Item>
              <Item>
                <ItemLabel>Price:</ItemLabel>
                <ItemValue>${item.total.toFixed(2)}</ItemValue>
              </Item>
            </span>
          )
        })}

        <SubHeading>Vendor Info </SubHeading>
        <Item>
          <ItemLabel>Vendor:</ItemLabel>
          <ItemValue>{data.vendor.raw_name || data.vendor.name}</ItemValue>
        </Item>
        <Item>
          <ItemLabel>Address:</ItemLabel>
          <ItemValue>{data.vendor.raw_address}</ItemValue>
        </Item>
        {!data.payment.display_name && null}
        {data.payment.display_name && (
          <>
            <SubHeading>Payment Info:</SubHeading>
            <Item>
              <ItemLabel>Payment Type:</ItemLabel>
              <ItemValue>{data.payment.payment_type}</ItemValue>
            </Item>
            <Item>
              <ItemLabel>Card Number:</ItemLabel>
              <ItemValue>{data.payment.display_name}</ItemValue>
            </Item>
          </>
        )}
      </ReceiptDataContainer>
    </Content>
  );
};

const Content = styled.div`
  width: 100%;
  height: fit-content;
  margin: 0px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogoContainer = styled.div`
  width: 100px;
  height: 100px;
  margin: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 100px;
  height: 100px;
`;

const ReceiptDataContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0px 0px 0px 100px;
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const SubHeading = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${colors.black};
  margin: 20px 0px 0px 0px;
`;

const Item = styled.div`
  margin: 10px 0px 10px 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ItemLabel = styled.span`
  font-size: 14px;
  font-weight: 800;
  color: ${colors.black};
  margin: 0px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ItemValue = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: ${colors.darkGray};
  margin: 0px 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;


export { ReceiptData };
