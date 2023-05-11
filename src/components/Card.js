import React from 'react';
import styled from 'styled-components';
import { colors } from '../lib/colors';
import { ProgressBar } from './ProgressBar';
import { Button } from './Button';

const Card = ({
  dataExists, 
  imageExists, 
  image, 
  loading,
  handleImageFileChange,
  handleClick,
  handleImageUpload,
  clear,
  imageUpload,
  error
}) => {
  return (
    <CardContainer data={dataExists ? "true" : "false"}>
      <CardHeader>
        <Heading>Receipt Analyzer</Heading>
      </CardHeader>
      <CardBody>
        <CardText>
          Upload a receipt to analyze it.
        </CardText>
        {!image && <Button image={imageExists ? "true" : "false"} type="button" onClick={() => handleImageUpload()}>Upload Receipt</Button>}
        {!error && image && <Button image={imageExists ? "true" : "false"} type="button" onClick={() => handleClick()}>Analyze Receipt</Button>}
        {error && !dataExists && <Button error={error ? "true" : "false"} type="button">Try Again</Button>}
        {error && !dataExists && <Error>Error!</Error>}
        {!error && image && <Clear onClick={() => clear()}>clear</Clear>}
        <HiddenInput
          ref={imageUpload}
          label="Upload Receipt"
          type="file"
          accept=".jpg, .png, .jpeg"
          onChange={handleImageFileChange}
        />
        {loading && !dataExists && <ProgressBar />}
        {imageExists && (
          <ImageContainer>
            <ReceiptImage src={image} alt="receipt" />
          </ImageContainer>
        )}
      </CardBody>
    </CardContainer>
  );
};

const Heading = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: ${colors.black};
  margin: 10px 0;
`;

const CardContainer = styled.div`
  width: 25%;
  height: ${props => props.data === "true" ? '750px' : 'auto'};
  min-height: 500px;
  max-height: 750px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: rgba(242, 239, 234, 0.4);
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
  margin: 0;

  @media (max-width: 1000px) {
    width: 80%;
  }
`;

const CardHeader = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardBody = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const CardText = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${colors.black};
  margin: 10px 0;
`;

const HiddenInput = styled.input`
  opacity: 0;
`;

const ImageContainer = styled.div`
  width: 60%;
  height: auto;
  max-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const ReceiptImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Clear = styled.div`
  width: 100%;
  height: 30px;
  color: ${colors.black};
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;
  transition: all 0.3s ease-in-out;
  text-decoration: underline;
  &:hover {
    opacity: 0.8;
  }
`;

const Error = styled.p`
  color: ${colors.red};
  font-size: 14px;
  font-weight: 400;
  margin: 10px 0;
`;

export { Card };
