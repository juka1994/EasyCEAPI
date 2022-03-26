"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAll = exports.getById = exports.update = exports.create = void 0;
const models_1 = require("../models");
const create = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const estudiante = yield models_1.Estudiante.create(payload);
    return estudiante;
});
exports.create = create;
const update = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const estudiante = yield models_1.Estudiante.findByPk(id);
    if (!estudiante) {
        throw new Error('not found');
    }
    const estudianteUpdate = yield estudiante.update(payload);
    return estudianteUpdate;
});
exports.update = update;
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const estudiante = yield models_1.Estudiante.findByPk(id);
    if (!estudiante) {
        throw new Error('not found');
    }
    return estudiante;
});
exports.getById = getById;
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield models_1.Estudiante.findAll();
});
exports.getAll = getAll;
//# sourceMappingURL=Estudiante.js.map