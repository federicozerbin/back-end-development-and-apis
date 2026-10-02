import express from 'express';
import weatherRouter from './weather.js';
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));
app.use('/api/weather', weatherRouter);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.route("/api/data")
  .get((req, res) => {
    res.json({msg: "Welcome to API data"})
  })
  .post((req, res) => {
    res.status(201).json({postres: "201"})
  });

app.get('/api/greet/:name', (req, res) => {
    const { name } = req.params;
  res.status(200).json({msg: "Welcome" + name})
});

app.get('/api/info', (req, res) => {
  res.json({
    name: "Weather Service API",
    version: "1.0.0",
    endpoints: ["/api/weather/:city", "/api/greet/:name", "/api/data"],
  });
});

app.get('/api/status', (req, res) => {
  res.status(200).json({status: "200, OK"})
});

app.get('/docs', (req, res) => {
  res.redirect('/api/info');
});

app.listen(PORT, () => {
  console.log('Server running at http://localhost:3000');
});