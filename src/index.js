import Fastify from 'fastify';
import dotenv from 'dotenv';
import publicRoutes from './routes/publicRoutes.js';
import pceRoutes from './routes/pceRoutes.js';
import pcacsRoutes from './routes/pcacsRoutes.js';
import picaRoutes from './routes/picaRoutes.js';

dotenv.config();

const fastify = Fastify({ logger: true });

fastify.register(publicRoutes);
fastify.register(pceRoutes);
fastify.register(pcacsRoutes);
fastify.register(picaRoutes);

const start = async () => {
  try {
    await fastify.listen({ port: process.env.PORT || 3000 });
    console.log(`🚀 Server running on port ${process.env.PORT || 3000}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
