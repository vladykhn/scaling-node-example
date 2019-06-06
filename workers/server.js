const server = require("http");

const workerName = `Worker-${process.pid}`;
const port = 3000;

const requestHandler = (_, res) => {
  res.writeHead(200);
  res.end(`Hello! I am ${workerName}\n`);
};

let app;

exports.start = () => {
  app = server
    .createServer(requestHandler)
    .listen(port, () => console.log(`${workerName} listening on port ${port}`));
  return Promise.resolve();
};

exports.close = () => {
  app.close();
  return Promise.resolve();
};
