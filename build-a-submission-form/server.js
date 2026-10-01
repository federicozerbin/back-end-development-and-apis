import express from 'express';
const app = express();
import apiRouter from './routes/api.routes.js';
import { finalErrorHandler, notFoundHandler } from './middleware/error.middleware.js';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiRouter);
app.use(notFoundHandler);
app.use(finalErrorHandler);

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});