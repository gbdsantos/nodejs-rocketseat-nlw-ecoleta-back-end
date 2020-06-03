import express = require('express');
import cors from 'cors';
import path from 'path';
import routes from './routes';

const app = express();
const port = 3333;

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(port, () => {
  console.log(`🚀 Server has started! On Port ${port}`);
});
