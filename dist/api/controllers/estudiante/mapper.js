"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toEstudiante = void 0;
const toEstudiante = (estudiante) => {
    return {
        idEstudiante: estudiante.idEstudiante,
        Codigo: estudiante.Codigo,
        idPersonaRol: estudiante.idPersonaRol,
        createdAt: estudiante.createdAt,
        updatedAt: estudiante.updatedAt
    };
};
exports.toEstudiante = toEstudiante;
//# sourceMappingURL=mapper.js.map