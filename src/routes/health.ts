import { FastifyInstance } from 'fastify';

export default async function (fastify: FastifyInstance): Promise<void> {
  fastify
    .get('/health/alive', async function () {
      return { message: 'ok' };
    })
    .get('/health/ready', async function () {
      return { message: 'ok' };
    });
}
