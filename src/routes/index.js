import publicRoutes from './publicRoutes.js';

// PCE Routes
import pceContactRoutes from './pce/pceContactRoutes.js';
import pceStudentRoutes from './pce/pceStudentRoutes.js';
import pceDiplomaRoutes from './pce/pceDiplomaRoutes.js';
import pceDocumentRoutes from './pce/pceDocumentRoutes.js';
import pceEntranceExamRoutes from './pce/pceEntranceExamRoutes.js';
import pceFamilyDetailsRoutes from './pce/pceFamilyRoutes.js';
import pceHscMarksRoutes from './pce/pceHscMarksRoutes.js';
import pceProgramLevelRoutes from './pce/pceProgramLevelsRoutes.js';
import pceProgramRoutes from './pce/pceProgramRoutes.js';
import pcestudentGapRoutes from './pce/pcestudentGapRoutes.js';

// PCACS Routes
import pcacsStudentRoutes from './pcacs/pcacsStudentRoutes.js';

//PICA Routes
import picaStudentRoutes from './pica/picaStudentRoutes.js';
import picaContactRoutes from './pica/picaContactRoutes.js';
import picaDocumentRoutes from './pica/picaDocumentRoutes.js';
import picaEmpRoutes from './pica/picaEmpRoutes.js';
import picaExamRoutes from './pica/picaExamRoutes.js';
import picaFamilyRoutes from './pica/picaFamilyRoutes.js';
import picaHSCMarksRoutes from './pica/picaHSCMarksRoutes.js';
import picaProgramRoutes from './pica/picaProgramRoutes.js';

const registerRoutes = (fastify) => {
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

    // PCACS
    fastify.register(pcacsStudentRoutes, { prefix: '/pcacs' });

    //PICA
    fastify.register(picaStudentRoutes, { prefix: '/pica' });
    fastify.register(picaContactRoutes, { prefix: '/pica' });
    fastify.register(picaDocumentRoutes, { prefix: '/pica' });
    fastify.register(picaEmpRoutes, { prefix: '/pica' });
    fastify.register(picaExamRoutes, { prefix: '/pica' });
    fastify.register(picaFamilyRoutes, { prefix: '/pica' });
    fastify.register(picaHSCMarksRoutes, { prefix: '/pica' });
    fastify.register(picaProgramRoutes, { prefix: '/pica' });

    //Public
    fastify.register(publicRoutes, { prefix: '/public' });

    console.log("All routes registered successfully.");
};

export default registerRoutes;
