import { Request as ExpressRequest, Response as ExpressResponse } from 'express'

import ListUsersService from '../../services/User/List'

class ListUsersController {
  async handle(request: ExpressRequest, response: ExpressResponse) {
    const listUsersService = new ListUsersService()

    const user = await listUsersService.execute()

    return response.json(user)
  }
}

export default ListUsersController
