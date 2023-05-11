const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;
const Client = require('@veryfi/veryfi-sdk');

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000'
}));

app.post('/api/documents', async (req, res) => {
  // Extracting Data
  const client_id = req.headers.client_id;
  const client_secret = req.headers.client_secret;
  const username = req.headers.user_name;
  const api_key = req.headers.api_key;
  const file_name = req.body.file_name;
  const file = req.body.file;

  let veryfi_client = new Client(client_id, client_secret, username, api_key);
  let response = await veryfi_client.process_document_buffer(file, file_name, ['Utilities'], true);
  console.log(response);

  return res.json(response);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
