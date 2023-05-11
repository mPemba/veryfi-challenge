import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { ProcessReceipt } from './service';
import { Report } from './components/Report';
import { Card } from './components/Card';

function App() {
  const imageUpload = useRef(null);
  const [receiptData, setReceiptData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [imageFileName, setImageFileName] = useState('');
  const [error, setError] = useState(null);
  const [imageExists, setImageExists] = useState(false);
  const [dataExists, setDataExists] = useState(false);

  useEffect(() => {
    image ? setImageExists(true) : setImageExists(false);
    receiptData ? setDataExists(true) : setDataExists(false);
  }, [image, receiptData]);

  const handleImageFileChange = (event) => {
    const file = event.target.files[0];
    setImageFileName(file.name);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    }
  };

  const handleClick = async () => {
    setLoading(true);
    const data = await ProcessReceipt(image, imageFileName);
    if (data.error) {
      setError(data.error);
    } else {
      setReceiptData(data);
    }
    setLoading(false);
  };

  const handleImageUpload = () => {
    imageUpload.current.click();
  };

  const clear = () => {
    setImage(null);
    setImageFileName('');
    setReceiptData(null);
    setError(null);
  };

  return (
    <Main data={dataExists ? "true" : "false"} image={imageExists ? "true" : "false"}>
      <Card
        dataExists={dataExists}
        imageExists={imageExists}
        image={image}
        loading={loading}
        handleImageUpload={handleImageUpload}
        handleImageFileChange={handleImageFileChange}
        handleClick={handleClick}
        clear={clear}
        imageUpload={imageUpload}
        error={error}
      />
      {!loading && !error && dataExists && (
        <Report dataExists={dataExists} receiptData={receiptData} loading={loading} />
      )}
    </Main>
  );
};

const Main = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: ${props => props.data === "true" ? 'row' : 'column'};
  justify-content: center;
  align-items: ${props => props.imageExists ? 'flex-start' : 'center'};
  transition: justify-content 1000ms linear;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    height: fit-content;
    padding: 20px;
  }
`;

export default App;
