const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "ok" }));
    return;
  }

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from docker-ci-example");
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
