import { Controller } from 'egg'
import { UserModel } from '../../model/User'

export default class UserController extends Controller {
  public async register() {
    const { ctx } = this

    let response

    try {
      const user = await UserModel.findOne({ username: ctx.query.username })
      if (user) {
        response = {
          code: 5000,
          data: null,
          message: '用户已注册'
        }
      }
    } catch (error) {
      response = error
    }

    // try {
    //   const user = await UserModel.create(ctx.query)
    //   response = {
    //     code: 0,
    //     data: user,
    //     message: ''
    //   }
    // } catch (error) {
    //   response = {
    //     code: 5000,
    //     data: null,
    //     message: error.message
    //   }
    // }

    ctx.body = response
  }

  public async list() {
    const { ctx } = this
    let response

    try {
      const user = await UserModel.find({})
      response = {
        code: 0,
        data: user,
        message: ''
      }
    } catch (error) {
      response = {
        code: 100,
        data: null,
        message: error.message
      }
    }
    ctx.body = response
  }
}
