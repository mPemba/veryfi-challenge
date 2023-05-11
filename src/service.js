const url = 'http://localhost:3001/api/documents';

const {
  REACT_APP_API_KEY,
  REACT_APP_USER_NAME,
  REACT_APP_CLIENT_ID,
  REACT_APP_CLIENT_SECRET
} = process.env;

const ProcessReceipt = async (image, imageFileName) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'CLIENT_ID': REACT_APP_CLIENT_ID,
        'CLIENT_SECRET': REACT_APP_CLIENT_SECRET,
        'USER_NAME': REACT_APP_USER_NAME,
        'API_KEY': REACT_APP_API_KEY,
        'ACCEPT': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "file": image,
        "file_name": imageFileName
      })
    });

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return {
      error: error
    }
  }
};

export { ProcessReceipt };
