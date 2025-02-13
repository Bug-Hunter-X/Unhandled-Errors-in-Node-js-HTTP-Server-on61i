const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end('Hello World!');
}).on('error', err => {
  console.error('Server error:', err);
  // Perform additional error handling, e.g., logging, retries, etc.
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
//Improved error handling using the 'error' event listener.