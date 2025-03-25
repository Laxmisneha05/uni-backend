import publicRoutes from './publicRoutes.js';
import pceContactRoutes from './pce/pceContactRoutes.js';
import pceStudentRoutes from './pce/pceStudentRoutes.js';
import pcacsStudentRoutes from './pcacs/studentRoutes.js';
import picaStudentRoutes from './pica/picaStudentRoutes.js';
import picaContactRoutes from './pica/picaContactRoutes.js';
const registerRoutes = (fastify) => {
    fastify.register(pceStudentRoutes, { prefix: '/pce' });
    fastify.register(pceContactRoutes, { prefix: '/pce' });
    fastify.register(pcacsStudentRoutes, { prefix: '/pcacs' });
    fastify.register(picaStudentRoutes, { prefix: '/pica' });
    fastify.register(publicRoutes, { prefix: '/public' });
    fastify.register(picaContactRoutes, { prefix: '/pica' });

    console.log("All routes registered successfully.");
};

export default registerRoutes;
