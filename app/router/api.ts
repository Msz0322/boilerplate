import { Application } from 'egg';

export default (app: Application) => {
  const { controller } = app;

  const apiRouter = app.router.namespace('/api');

  apiRouter.get('/test', controller.api.test.index);
};
