
// PCE Routes
import pceContactRoutes from './pceContactRoutes.js';
import pceStudentRoutes from './pceStudentRoutes.js';
import pceDiplomaRoutes from './pceDiplomaRoutes.js';
import pceDocumentRoutes from './pceDocumentRoutes.js';
import pceEntranceExamRoutes from './pceEntranceExamRoutes.js';
import pceFamilyDetailsRoutes from './pceFamilyRoutes.js';
import pceHscMarksRoutes from './pceHscMarksRoutes.js';
import pceProgramLevelRoutes from './pceProgramLevelsRoutes.js';
import pceProgramRoutes from './pceProgramRoutes.js';
import pcestudentGapRoutes from './pcestudentGapRoutes.js';


const pceRoutes = (fastify) => {
    // PCE
    fastify.register(pceStudentRoutes, { prefix: '/pce' });
    fastify.register(pceContactRoutes, { prefix: '/pce' });
    fastify.register(pceDiplomaRoutes, { prefix: '/pce' });
    fastify.register(pceDocumentRoutes, { prefix: '/pce' });
    fastify.register(pceEntranceExamRoutes, { prefix: '/pce' });
    fastify.register(pceFamilyDetailsRoutes, { prefix: '/pce' });
    fastify.register(pceHscMarksRoutes, { prefix: '/pce' });
    fastify.register(pceProgramLevelRoutes, { prefix: '/pce' });
    fastify.register(pceProgramRoutes, { prefix: '/pce' });
    fastify.register(pcestudentGapRoutes, { prefix: '/pce' });


    console.log("All routes registered successfully.");
};

export default pceRoutes;