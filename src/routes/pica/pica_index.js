
import picaStudentRoutes from './picaStudentRoutes.js';
import picaContactRoutes from './picaContactRoutes.js';
import picaDocumentRoutes from './picaDocumentRoutes.js';
import picaEmpRoutes from './picaEmpRoutes.js';
import picaExamRoutes from './picaExamRoutes.js';
import picaFamilyRoutes from './picaFamilyRoutes.js';
import picaHSCMarksRoutes from './picaHSCMarksRoutes.js';
import picaProgramRoutes from './picaProgramRoutes.js';

const picaRoutes = (fastify) => {
    fastify.register(picaStudentRoutes, { prefix: '/pica' });
    fastify.register(picaContactRoutes, { prefix: '/pica' });
    fastify.register(picaDocumentRoutes, { prefix: '/pica' });
    fastify.register(picaEmpRoutes, { prefix: '/pica' });
    fastify.register(picaExamRoutes, { prefix: '/pica' });
    fastify.register(picaFamilyRoutes, { prefix: '/pica' });
    fastify.register(picaHSCMarksRoutes, { prefix: '/pica' });
    fastify.register(picaProgramRoutes, { prefix: '/pica' });

    console.log("All routes registered successfully.");
};

export default picaRoutes;
