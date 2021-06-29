import { Request as ExpressRequest, Response as ExpressResponse } from 'express'
import ListComplimentsByUserSendService from '../../services/Compliment/ListByUserSend'

class ListComplimentsByUserSendController {
  async handle(request: ExpressRequest, response: ExpressResponse) {
    const { userId: userSendId } = request

    const listComplimentsByUserSendService =
      new ListComplimentsByUserSendService()

    const listCompliments = await listComplimentsByUserSendService.execute(
      userSendId
    )

    return response.json(listCompliments)
  }
}

export default ListComplimentsByUserSendController
