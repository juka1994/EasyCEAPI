"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const persona_1 = __importDefault(require("./persona"));
const estudiante_1 = __importDefault(require("./estudiante"));
const maestro_1 = __importDefault(require("./maestro"));
const grado_1 = __importDefault(require("./grado"));
const grupo_1 = __importDefault(require("./grupo"));
const materia_1 = __importDefault(require("./materia"));
const ciclo_1 = __importDefault(require("./ciclo"));
const rol_1 = __importDefault(require("./rol"));
const personaRol_1 = __importDefault(require("./personaRol"));
const router = (0, express_1.Router)();
router.use('/persona', persona_1.default);
router.use('/estudiante', estudiante_1.default);
router.use('/maestro', maestro_1.default);
router.use('/grado', grado_1.default);
router.use('/grupo', grupo_1.default);
router.use('/materia', materia_1.default);
router.use('/ciclo', ciclo_1.default);
router.use('/rol', rol_1.default);
router.use('/personaRol', personaRol_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map