import Fastify from 'fastify';
import dotenv from 'dotenv';
import publicRoutes from './routes/publicRoutes.js';
import pceRoutes from './routes/pce/pce_index.js';
import pcacsRoutes from './routes/pcacs/pcacs_index.js';

dotenv.config();

const fastify = Fastify({ logger: true });

// Register all routes
publicRoutes(fastify);
pceRoutes(fastify);
pcacsRoutes(fastify);

// Start the server
const start = async () => {
    try {
        await fastify.listen({ port: process.env.PORT || 3000, host: '0.0.0.0' });
        console.log(`Server running at http://localhost:${process.env.PORT || 3000}`);
        console.log("Registered Routes:");
        console.log(fastify.printRoutes());
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();
