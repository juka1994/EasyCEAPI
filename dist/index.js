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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = exports.get = void 0;
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./api/routes"));
const init_1 = __importDefault(require("./db/init"));
const port = 5000;
const get = () => {
    const app = (0, express_1.default)();
    //Body parsing Middleware
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        return res.status(200).send({ message: `Welcome to the API \n Endpoints available at http://localhost:${port}/api/v1` });
    }));
    app.use('/api/v1', routes_1.default);
    return app;
};
exports.get = get;
const start = () => {
    try {
        const app = (0, exports.get)();
        app.listen((port), () => {
            console.log(`Server running on http://localhost:${port}`);
        });
    }
    catch (error) {
        console.log(`Error ocurred: ${error.message}`);
    }
};
exports.start = start;
(0, exports.start)();
(0, init_1.default)();
//# sourceMappingURL=index.js.map