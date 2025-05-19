const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello from Render-deployed Express app!');
});

app.get('/greet', (req, res) => {
  const name = req.query.name || 'Guest';
  res.json({ message: `Hello, ${name}!` });
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
