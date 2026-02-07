import { makeServer } from './server.js';

const PORT = process.env.API_PORT || 3002;
const server = makeServer();

server.listen(PORT, () => {
  console.log(`API is running on ${PORT}`);
});
