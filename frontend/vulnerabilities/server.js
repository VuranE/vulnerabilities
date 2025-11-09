// server.js
const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
require("dotenv").config();
const path = require("path");

const app = express();

// Configuration
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';



// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// All other requests serve React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start server
app.listen(PORT, HOST, () => {
  console.log(`Starting server at http://${HOST}:${PORT}`);
});