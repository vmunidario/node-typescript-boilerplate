import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';

export function config() {
  const env = dotenv.config({
    path: process.env.ENV ? process.env.ENV : '.env'
  });
  const result = dotenvExpand(env);
  if (result.error) {
    throw new Error(result.error.message);
  }
}
