import { Request as ExpressRequest, Response as ExpressResponse } from 'express'

import CreateTagService from '../../services/Tag/Create'

interface ICreateTagController {
  handle(
    request: ExpressRequest,
    response: ExpressResponse
  ): Promise<ExpressResponse>
}

class CreateTagController implements ICreateTagController {
  async handle(request: ExpressRequest, response: ExpressResponse) {
    const { name, email, admin } = request.body

    const createTagService = new CreateTagService()

    const tag = await createTagService.execute({ name })

    return response.json(tag)
  }
}

export default CreateTagController
