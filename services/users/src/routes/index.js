import Router from 'koa-router';
import GraphqlRouter from './graphql-router';

const { routes: graphql } = new GraphqlRouter();

export default class MainRouter {
  constructor() {
    this.router = new Router();
    this.api = new Router();
    this.init();
    this.routes = this.router;
  }

  async home(ctx) {
    ctx.status = 200;
    ctx.body = {
      message: 'This is another test from a g!',
    };
  }

  init() {
    this.api.use(graphql);
    this.router.use('/api', this.api.routes());
    this.router.get('/', this.home);
  }
}
