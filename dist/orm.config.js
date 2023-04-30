"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Post_1 = require("./entities/Post");
const constants_1 = require("./constants");
const mongo_highlighter_1 = require("@mikro-orm/mongo-highlighter");
exports.default = {
    entities: [Post_1.Post],
    type: 'mongo',
    dbName: 'yit',
    highlighter: new mongo_highlighter_1.MongoHighlighter(),
    clientUrl: process.env.DATABASE_URL,
    debug: !constants_1.__prod__,
};
//# sourceMappingURL=orm.config.js.map