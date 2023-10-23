import express from 'express';
import * as path from 'path';
import { transformToArrowFunction } from '@libs/transform-code';

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(express.json());

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to server!' });
});
app.post('/api/hello', (req, res) => {
  const { code } = req.body;

  res.json({
    code: transformToArrowFunction(code),
  });
});

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
