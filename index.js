const { startCluster } = require("workers-cluster");

const pathToWorker = `${__dirname}/workers/server.js`;
const workerInstances = 4;

const workers = {
  [pathToWorker]: workerInstances
};

startCluster(workers).then(() => {
  console.log("All workers have been started");
});
