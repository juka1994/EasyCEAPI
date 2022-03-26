"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toMaestro = void 0;
const toMaestro = (maestro) => {
    return {
        idMaestro: maestro.idMaestro,
        Codigo: maestro.Codigo,
        Especialidad: maestro.Especialidad,
        idPersonaRol: maestro.idPersonaRol,
        createdAt: maestro.createdAt,
        updatedAt: maestro.updatedAt
    };
};
exports.toMaestro = toMaestro;
//# sourceMappingURL=mapper.js.map