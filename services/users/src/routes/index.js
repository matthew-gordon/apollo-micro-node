import Router from 'koa-router';
import config from '../config';

export default class MainRouter {
  constructor() {
    this.router = new Router();
    this.init();
    this.routes = this.router;
  }

  async home(ctx) {
    const user = await config.db('users').first();

    ctx.status = 200;
    ctx.body = {
      message: 'Hello my love',
      user,
    };
  }

  init() {
    this.router.get('/', this.home);
  }
}
