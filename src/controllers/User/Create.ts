import { Request as ExpressRequest, Response as ExpressResponse } from 'express'

import CreateUserService from '../../services/User/Create'

interface ICreateUserController {
  handle(
    request: ExpressRequest,
    response: ExpressResponse
  ): Promise<ExpressResponse>
}

class CreateUserController implements ICreateUserController {
  async handle(request: ExpressRequest, response: ExpressResponse) {
    const { name, email, password,admin } = request.body

    const createUserService = new CreateUserService()

    const user = await createUserService.execute({ name, email, password, admin })

    return response.json(user)
  }
}

export default CreateUserController
