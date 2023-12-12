const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

app.get('/data', (req, res) => {
  // Read the JSON file
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      // Parse the JSON and send it as the response
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
