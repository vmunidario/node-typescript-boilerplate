import { FastifyInstance } from 'fastify';
import {
  HealthSchema,
  validatorCompiler,
} from './schema';

export default async function (fastify: FastifyInstance): Promise<void> {
  fastify
    .get('/health/alive', { schema: HealthSchema, validatorCompiler }, async function () {
      return { message: 'ok' };
    })
    .get('/health/ready', { schema: HealthSchema, validatorCompiler }, async function () {
      return { message: 'ok' };
    });
}
