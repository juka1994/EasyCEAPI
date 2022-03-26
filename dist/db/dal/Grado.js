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
exports.getAll = exports.deleteById = exports.getById = exports.update = exports.create = void 0;
const models_1 = require("../models");
const sequelize_1 = require("sequelize");
const create = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield models_1.Grado.create(payload);
    return result;
});
exports.create = create;
const update = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const grado = yield models_1.Grado.findByPk(id);
    if (!grado) {
        throw new Error('not found');
    }
    const gradoUpdate = yield grado.update(payload);
    return gradoUpdate;
});
exports.update = update;
const getById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const grado = yield models_1.Grado.findByPk(id);
    if (!grado) {
        throw new Error('not fonund');
    }
    return grado;
});
exports.getById = getById;
const deleteById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deleteGrado = yield models_1.Grado.destroy({
        where: { idGrado: id }
    });
    return !!deleteGrado;
});
exports.deleteById = deleteById;
const getAll = (filters) => __awaiter(void 0, void 0, void 0, function* () {
    return yield models_1.Grado.findAll(Object.assign({ where: Object.assign({}, ((filters === null || filters === void 0 ? void 0 : filters.isDeleted) && { deleteAt: { [sequelize_1.Op.not]: null } })) }, (((filters === null || filters === void 0 ? void 0 : filters.isDeleted) || (filters === null || filters === void 0 ? void 0 : filters.includeDeleted)) && { paranoid: true })));
});
exports.getAll = getAll;
//# sourceMappingURL=Grado.js.map