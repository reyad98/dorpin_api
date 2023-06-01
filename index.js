import cookieParser from 'cookie-parser';
import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware/dist/index.js';
import multer from "multer";

const app = express();

app.use(express.json());
app.use(cookieParser());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../client/public/upload');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  }
});

const upload = multer({ storage });

app.post('/api/upload', upload.single('file'), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.use(
  '/api/auth',
  createProxyMiddleware({
    target: 'https://mmemories.onrender.com',
    changeOrigin: true,
  })
);
app.use(
  '/api/users',
  createProxyMiddleware({
    target: 'https://mmemories.onrender.com',
    changeOrigin: true,
  })
);
app.use(
  '/api/posts',
  createProxyMiddleware({
    target: 'https://mmemories.onrender.com',
    changeOrigin: true,
  })
);

app.listen(8800, () => {
  console.log('Connected!');
});

app.get('/', (req, res) => {
  res.send('Backend Conn!!!!!');
});


