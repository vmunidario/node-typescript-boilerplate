import { FastifyInstance } from 'fastify';
import { alive, ready } from '../apis/health';
import { HealthSchema, validatorCompiler } from '../apis/schemas';

export default async function (fastify: FastifyInstance) {
  fastify
    .get(
      '/health/alive',
      { schema: HealthSchema, validatorCompiler },
      alive
    )
    .get(
      '/health/ready',
      { schema: HealthSchema, validatorCompiler },
      ready
    );
}
