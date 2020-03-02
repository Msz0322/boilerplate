import { Application } from 'egg'

export default (app: Application) => {
  const { controller } = app

  const apiRouter = app.router.namespace('/api/user')

  apiRouter.get('/register', controller.api.user.register)
  apiRouter.get('/list', controller.api.user.list)
}
