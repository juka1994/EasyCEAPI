"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toMateria = void 0;
const toMateria = (materia) => {
    return {
        idMateria: materia.idMateria,
        Nombre: materia.Nombre,
        Descripcion: materia.Descripcion,
        Creditos: materia.Creditos,
        Horas: materia.Horas,
        Estado: materia.Estado,
        idGrado: materia.idGrado,
        createdAt: materia.createdAt,
        updatedAt: materia.updatedAt
    };
};
exports.toMateria = toMateria;
//# sourceMappingURL=mapper.js.map