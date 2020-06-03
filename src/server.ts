import express = require('express');
import routes from './routes';

const app = express();
const port = 3333;

app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`🚀 Server has started! On Port ${port}`);
});
