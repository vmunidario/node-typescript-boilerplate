import { FastifyInstance } from 'fastify';
import initServer from './server';

initServer()
  .then((server: FastifyInstance) => {
    server.listen(process.env.PORT || 8888, (err, address) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      console.log(`Server listening at ${address}`);
    });
  })
  .catch(console.error);
