import server from './index.js';
import connectToDatabase from './src/Database_Config/mongosConfig.js';

server.listen(8000, () => {
  connectToDatabase();
  console.log(`Server running on Port8000`);
});