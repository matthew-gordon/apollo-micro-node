import http from 'http';
import Koa from 'koa';
import logger from 'koa-logger';
import bodyParser from 'koa-bodyparser';
import cors from 'kcors';
import Router from './routes';

import config from './config';

const { routes } = new Router();

export default class App {
  constructor() {
    this.app = new Koa();
    this.middleware();
    this.routes();
    this.server = this.init();
  }

  middleware() {
    this.app.use(logger());
    this.app.use(cors(config.cors));
    this.app.use(bodyParser());
  }

  routes() {
    this.app.use(routes.routes());
    this.app.use(routes.allowedMethods());
  }

  init() {
    const PORT = process.env.PORT || 3000;
    this.app.server = http.createServer(this.app.callback());
    return this.app.server.listen(PORT);
  }
}
