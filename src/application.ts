import express from 'express';
import {
  Connection,
  IDatabaseDriver,
  MikroORM,
  EntityManager,
} from '@mikro-orm/core';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { Server } from 'http';
import { buildSchema } from 'type-graphql';

import { HelloResolver } from './resolvers/hello';
import ormConfig from './orm.config';
import { __prod__ } from './constants';

export default class Application {
  public orm: MikroORM<IDatabaseDriver<Connection>>;
  public app: express.Application;
  public server: Server;
  public em: EntityManager;

  public connect = async (): Promise<void> => {
    try {
      this.orm = await MikroORM.init(ormConfig);
      this.em = this.orm.em;
      console.log('📌 Connected to database');
    } catch (error) {
      console.error('📌 Could not connect to the database', error);
      throw Error(error);
    }
  };
  public init = async (): Promise<void> => {
    this.app = express();
    this.app.use(
      cors()
    );
    try {
      const apolloServer = new ApolloServer({
        schema: await buildSchema({
          resolvers: [HelloResolver],
          validate: false,
        }),
        context: ({ req, res }) => ({
          req,
          res,
        }),
      });
      await apolloServer.start();

      apolloServer.applyMiddleware({
        app: this.app,
        cors: false,
      });
      const port = process.env.PORT || 4000;
      this.server = this.app.listen(port, () => {
        console.log('server started on localhost:4000');
      });
    } catch (error) {
      console.error('📌 Could not start server', error);
    }
  };
}
