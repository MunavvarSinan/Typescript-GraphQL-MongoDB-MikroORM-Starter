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
const express_1 = __importDefault(require("express"));
const core_1 = require("@mikro-orm/core");
const cors_1 = __importDefault(require("cors"));
const server_1 = require("@apollo/server");
const type_graphql_1 = require("type-graphql");
const hello_1 = require("./resolvers/hello");
const orm_config_1 = __importDefault(require("./orm.config"));
class Application {
    constructor() {
        this.connect = () => __awaiter(this, void 0, void 0, function* () {
            try {
                this.orm = yield core_1.MikroORM.init(orm_config_1.default);
                this.em = this.orm.em;
                console.log('📌 Connected to database');
            }
            catch (error) {
                console.error('📌 Could not connect to the database', error);
                throw Error(error);
            }
        });
        this.init = () => __awaiter(this, void 0, void 0, function* () {
            this.app = (0, express_1.default)();
            this.app.use((0, cors_1.default)());
            try {
                const apolloServer = new server_1.ApolloServer({
                    schema: yield (0, type_graphql_1.buildSchema)({
                        resolvers: [hello_1.HelloResolver],
                        validate: false,
                    }),
                });
                yield apolloServer.start();
                const port = process.env.PORT || 4000;
                this.server = this.app.listen(port, () => {
                    console.log('server started on localhost:4000');
                });
            }
            catch (error) {
                console.error('📌 Could not start server', error);
            }
        });
    }
}
exports.default = Application;
//# sourceMappingURL=application.js.map