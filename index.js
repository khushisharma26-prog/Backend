import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Hello Duniya!');
});

app.get('/twitter', (req, res) => {
  res.send('KhushiSharma!');
});

app.get('/login', (req, res) => {
  res.send('<h1>Please login at our website</h1>');
});

app.get('/youtube', (req, res) => {
  res.send('<h2>Youtube link is https://www.youtube.com/</h2>');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});