import { Request as ExpressRequest, Response as ExpressResponse } from 'express'

import ListTagsService from '../../services/Tag/List'

class ListTagsController {
  async handle(request: ExpressRequest, response: ExpressResponse) {
    const listTagsService = new ListTagsService()

    const tags = await listTagsService.execute()

    return response.json(
      tags.map(tag => ({
        hash: `#${tag.name}`.toLowerCase(),
        ...tag
      }))
    )
  }
}

export default ListTagsController
