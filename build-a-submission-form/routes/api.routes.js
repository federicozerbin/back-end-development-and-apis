import {Router} from 'express';
const router =  Router();

router.get("/", (req, res) => {
  res.send('API is available!');
});

router.get("/crash", (req, res, next) => {
  next(new Error('Database connection failed.'));
});

router.get("/bad-request", (req, res, next) => {
    const error = new Error('Client-side data is missing.');
    error.status = 400;
    next(error);
});

export default router;