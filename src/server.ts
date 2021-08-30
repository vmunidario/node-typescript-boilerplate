
import path = require('path');
import AutoLoad from 'fastify-autoload';
import fastify, { FastifyInstance } from 'fastify';
import * as env from "./env";
import log from './utils/log';

export default async function (opts = {}): Promise<FastifyInstance> {

  const server = fastify({
    logger: log
  });

  env.config();

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  server.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts),
  });

  // This loads all plugins defined in routes
  // define your routes in one of these
  server.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts),
  });
  return server;
}
