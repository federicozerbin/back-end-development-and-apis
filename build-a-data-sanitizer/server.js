import express from 'express';
import { join } from 'path';
import { inputCleaner, inputValidator } from './middleware.js';

const app = express();
const filePath = join('public', 'index.html');

app.use(express.static('public', { index: false }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

function finalHandler(req, res) {
  res.send(`${req.body.username} has been successfully submitted! ${req.body.comment || ''}`);
}

app.get('/', (req, res) => {
  res.redirect('/form');
});

app.get('/form', (req, res) => {
  res.sendFile(filePath, { root: process.cwd() });
});

app.post('/submit', inputCleaner, inputValidator, finalHandler);

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});