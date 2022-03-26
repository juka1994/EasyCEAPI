"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const models_1 = require("./models");
const isDev = process.env.NODE_ENV === 'development';
const isTest = process.env.NODE_ENV !== 'test';
const dbInit = () => Promise.all([
    models_1.Rol.sync({ alter: isDev || isTest }),
    models_1.Persona.sync({ alter: isDev || isTest }),
    models_1.Grupo.sync({ alter: isDev } || isTest),
    models_1.Grado.sync({ alter: isDev } || isTest),
    models_1.Ciclo.sync({ alter: isDev || isTest }),
    //Materia.sync({ alter: isDev || isTest}),
    models_1.Maestro.sync({ alter: isDev || isTest }),
    //PersonaRol.sync({alter: isDev || isTest})
    //Estudiante.sync({alter: isDev || isTest}),    
]).then((res) => {
    console.log(res);
}).catch((error) => {
    console.log(error);
});
exports.default = dbInit;
//# sourceMappingURL=init.js.map