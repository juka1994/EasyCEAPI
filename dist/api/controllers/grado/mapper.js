"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toGrado = void 0;
const toGrado = (grado) => {
    return {
        idGrado: grado.idGrado,
        Nombre: grado.Nombre,
        createdAt: grado.createdAt,
        updatedAt: grado.updatedAt,
        deletedAt: grado.deleteAt
    };
};
exports.toGrado = toGrado;
//# sourceMappingURL=mapper.js.map