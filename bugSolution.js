const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate a long-running task asynchronously
  const start = Date.now();
  setTimeout(() => {
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) {
      sum += i;
    }
    const end = Date.now();
    console.log(`Long task took ${end - start}ms`);

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  }, 0);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});