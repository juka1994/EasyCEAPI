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
exports.checkCurpExists = exports.getAll = exports.deleteById = exports.getById = exports.update = exports.create = void 0;
const sequelize_1 = require("sequelize");
const lodash_1 = require("lodash");
const models_1 = require("../models");
const create = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const persona = yield models_1.Persona.create(payload);
    return persona;
});
exports.create = create;
const update = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const persona = yield models_1.Persona.findByPk(id);
    if (!persona) {
        throw new Error('not found');
    }
    const updatePersona = yield persona.update(payload);
    return updatePersona;
});
exports.update = update;
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const persona = yield models_1.Persona.findByPk(id);
    if (!persona) {
        throw new Error('not found');
    }
    return persona;
});
exports.getById = getById;
const deleteById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deletePersona = yield models_1.Persona.destroy({
        where: { idPersona: id }
    });
    return !!deletePersona;
});
exports.deleteById = deleteById;
const getAll = (filters) => __awaiter(void 0, void 0, void 0, function* () {
    return yield models_1.Persona.findAll(Object.assign({ where: Object.assign({}, ((filters === null || filters === void 0 ? void 0 : filters.isDeleted) && { deletedAt: { [sequelize_1.Op.not]: null } })) }, (((filters === null || filters === void 0 ? void 0 : filters.isDeleted) || (filters === null || filters === void 0 ? void 0 : filters.includeDeleted)) && { paranoid: true })));
});
exports.getAll = getAll;
const checkCurpExists = (Curp) => __awaiter(void 0, void 0, void 0, function* () {
    const personaCurp = yield models_1.Persona.findOne({
        where: {
            Curp
        }
    });
    return !(0, lodash_1.isEmpty)(personaCurp);
});
exports.checkCurpExists = checkCurpExists;
//# sourceMappingURL=Persona.js.map