import http from 'http';
import Koa from 'koa';
import Router from './routes';

const { routes } = new Router();

export default class App {
  constructor() {
    this.app = new Koa();
    this.routes();
    this.server = this.init();
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
