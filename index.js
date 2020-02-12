const express = require('express');

const apiRouter = require('./api/api-router');

const server = express();

server.get('/', (req, res) => {
  res.send(`<h2>HUBS Messages</h2>`);
});

server.use('/api', apiRouter);

const port = 3001;
server.listen(port, () => console.log('Server listening on port 3001'));