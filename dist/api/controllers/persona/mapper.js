"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPersona = void 0;
const toPersona = (persona) => {
    return {
        idPersona: persona.idPersona,
        ApellidoPaterno: persona.ApellidoPaterno,
        ApellidoMaterno: persona.ApellidoMaterno,
        PrimerNombre: persona.PrimerNombre,
        SegundoNombre: persona.SegundoNombre,
        FechaNacimiento: persona.FechaNacimiento,
        Email: persona.Email,
        Telefono: persona.Telefono,
        Direccion: persona.Direccion,
        Curp: persona.Curp,
        createdAt: persona.createdAt,
        updatedAt: persona.updatedAt,
        deletedAt: persona.deletedAt
    };
};
exports.toPersona = toPersona;
//# sourceMappingURL=mapper.js.map