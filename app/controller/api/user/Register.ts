import { Controller } from 'egg'
import { UserModel } from '../../../model/User'

export default class RegisterController extends Controller {
  public async index() {
    const { ctx } = this

    let response

    try {
      const user = await UserModel.create(ctx.query)
      response = {
        code: 200,
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
