// PCACS Routes
import pcacsStudentRoutes from './pcacsStudentRoutes.js';


const pcacsRoutes = (fastify) => {
    // PCACS
    fastify.register(pcacsStudentRoutes, { prefix: '/pcacs' });

    console.log("All routes registered successfully.");
};

export default pcacsRoutes;
