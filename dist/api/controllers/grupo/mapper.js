"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toGrupo = void 0;
const toGrupo = (grupo) => {
    return {
        idGrupo: grupo.idGrupo,
        Nombre: grupo.Nombre,
        createdAt: grupo.createdAt,
        updatedAt: grupo.updatedAt,
        deletedAt: grupo.deleteAt
    };
};
exports.toGrupo = toGrupo;
//# sourceMappingURL=mapper.js.map