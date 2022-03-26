"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const personaController_1 = require("../controllers/personaController");
const router = (0, express_1.Router)();
//Persona
router.post('/persona', personaController_1.createPersona);
exports.default = router;
//# sourceMappingURL=router.js.map