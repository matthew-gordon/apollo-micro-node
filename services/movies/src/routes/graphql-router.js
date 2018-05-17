import Router from 'koa-router';
import { graphqlKoa, graphiqlKoa } from 'apollo-server-koa';
import schema from '../api';

export default class GraphqlRouter {
  constructor() {
    this.router = new Router();
    this.init();
    this.routes = this.router.routes();
  }

  graphiql() {
    return {
      endpointURL: '/api/graphql',
    };
  }

  graphql(ctx) {
    return {
      schema,
      context: {},
    };
  }

  init() {
    this.router.get('/graphiql', graphiqlKoa(this.graphiql));
    this.router.post('/graphql', graphqlKoa(this.graphql));
  }
}
