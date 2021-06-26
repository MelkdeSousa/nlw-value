import { Request as ExpressRequest, Response as ExpressResponse } from 'express'

import AuthenticateUserService from '../../services/User/Authenticate'

interface IAuthenticateUserController {
  handle(
    request: ExpressRequest,
    response: ExpressResponse
  ): Promise<ExpressResponse>
}

class AuthenticateUserController implements IAuthenticateUserController {
  async handle(request: ExpressRequest, response: ExpressResponse) {
    const { email, password } = request.body

    const authserService = new AuthenticateUserService()

    const token = await authserService.execute({ email, password })

    return response.json(token)
  }
}

export default AuthenticateUserController
