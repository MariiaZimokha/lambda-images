const app = require('./server.js');
const port = process.env.PORT || 8000;

// Server
app.listen(port, () => {
   console.log(`Listening on: http://localhost:${port}`);
});
