import { Post } from './entities/Post';
import { __prod__ } from './constants';
import { MikroORM } from '@mikro-orm/core';
import { MongoHighlighter } from '@mikro-orm/mongo-highlighter';

export default {
  entities: [Post],
  type: 'mongo',
  dbName: 'yit',
  highlighter: new MongoHighlighter(),
  clientUrl: `mongodb+srv://YIT:munavvar123@yit.uqvod.mongodb.net/?retryWrites=true&w=majority`,
  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];
