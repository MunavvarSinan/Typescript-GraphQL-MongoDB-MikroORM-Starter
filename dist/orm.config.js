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
    clientUrl: `mongodb+srv://YIT:munavvar123@yit.uqvod.mongodb.net/?retryWrites=true&w=majority`,
    debug: !constants_1.__prod__,
};
//# sourceMappingURL=orm.config.js.map