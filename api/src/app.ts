import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const port = 3001;
(async () => {
  const app = express();
  app.use(bodyParser.json());
  app.options('*', cors());
  app.get('/', function (req, res) {
    res.send('vue-user-editor-api');
  });
  app.listen(port, () => {
    console.log(`service running at at http://localhost:${port}`);
  });
})();
