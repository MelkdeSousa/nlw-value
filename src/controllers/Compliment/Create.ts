import { Request as ExpressRequest, Response as ExpressResponse } from 'express'

import CreateComplimentService from '../../services/Compliment/Create'

interface ICreateComplimentController {
  handle(
    request: ExpressRequest,
    response: ExpressResponse
  ): Promise<ExpressResponse>
}

class CreateComplimentController implements ICreateComplimentController {
  async handle(request: ExpressRequest, response: ExpressResponse) {
    const { tag_id, user_sender, user_receiver, message } = request.body

    const createComplimentService = new CreateComplimentService()

    const compliment = await createComplimentService.execute({
      tag_id,
      user_sender,
      user_receiver,
      message
    })

    return response.json(compliment)
  }
}

export default CreateComplimentController
