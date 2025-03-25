import publicRoutes from './publicRoutes.js';

// PCE Routes
import pceContactRoutes from './pce/pceContactRoutes.js';
import pceStudentRoutes from './pce/pceStudentRoutes.js';
import pceDiplomaRoutes from './pce/pceDiplomaRoutes.js';

// PCaCS Routes
import pcacsStudentRoutes from './pcacs/studentRoutes.js';

//PICA Routes
import picaStudentRoutes from './pica/picaStudentRoutes.js';
import picaContactRoutes from './pica/picaContactRoutes.js';


const registerRoutes = (fastify) => {
    // PCE
    fastify.register(pceStudentRoutes, { prefix: '/pce' });
    fastify.register(pceContactRoutes, { prefix: '/pce' });
    fastify.register(pceDiplomaRoutes, { prefix: '/pce' });

    // PCACS
    fastify.register(pcacsStudentRoutes, { prefix: '/pcacs' });

    //PICA
    fastify.register(picaStudentRoutes, { prefix: '/pica' });
    fastify.register(picaContactRoutes, { prefix: '/pica' });

    //Public
    fastify.register(publicRoutes, { prefix: '/public' });

    console.log("All routes registered successfully.");
};

export default registerRoutes;
