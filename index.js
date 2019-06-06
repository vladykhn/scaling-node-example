const server = require("http");

const workerName = `Worker-${process.pid}`;
const port = 3000;

const requestHandler = (_, res) => {
  console.log(`I (${workerName}) received request`);
  res.writeHead(200);
  res.end(`Hello! I am ${workerName}\n`);
};

server
  .createServer(requestHandler)
  .listen(port, () => console.log(`${workerName} listening on port ${port}`));
