const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the "dist" directory
app.use(express.static(path.join(__dirname, 'dist')));

// Route all requests to the "index.html" file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/dark-dungeon-fe', 'index.html'));
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
