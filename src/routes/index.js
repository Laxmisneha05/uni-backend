import publicRoutes from './publicRoutes.js';
import pceContactRoutes from './pce/contactRoutes.js';
import pceStudentRoutes from './pce/studentRoutes.js';
import pcacsStudentRoutes from './pcacs/studentRoutes.js';
import picaStudentRoutes from './pica/studentRoutes.js';

const registerRoutes = (fastify) => {
    fastify.register(pceStudentRoutes, { prefix: '/pce' });
    fastify.register(pceContactRoutes, { prefix: '/pce' }); // ✅ Fixing the prefix here
    fastify.register(pcacsStudentRoutes, { prefix: '/pcacs' });
    fastify.register(picaStudentRoutes, { prefix: '/pica' });
    fastify.register(publicRoutes, { prefix: '/public' });

    console.log("✅ All routes registered successfully.");
};

export default registerRoutes;
