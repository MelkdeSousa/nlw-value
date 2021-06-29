import { Request as ExpressRequest, Response as ExpressResponse } from 'express'
import ListComplimentsByUserReceiveService from '../../services/Compliment/ListByUserReceive'

class ListComplimentsByUserReceiveController {
  async handle(request: ExpressRequest, response: ExpressResponse) {
    const { userId: userReceiveId } = request

    const listComplimentsByUserReceiveService =
      new ListComplimentsByUserReceiveService()

    const listCompliments = await listComplimentsByUserReceiveService.execute(
      userReceiveId
    )

    return response.json(listCompliments)
  }
}

export default ListComplimentsByUserReceiveController
