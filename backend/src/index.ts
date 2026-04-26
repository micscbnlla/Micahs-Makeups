console.log("Hello via Bun!");import cluster from "node:cluster";
import os from "node:os";
import process from "node:process";

if (cluster.isPrimary) {
  const workerCount = os.availableParallelism();

  for (let i = 0; i < workerCount; i++) {
    cluster.fork();
  }

  console.log(`Primary ${process.pid} started ${workerCount} workers`);
} else {
  await import("./server.js");
  console.log(`Worker ${process.pid} started`);
}
