import {
  Request as ExpressRequest,
  Response as ExpressResponse,
  NextFunction
} from 'express'
import { getCustomRepository } from 'typeorm'

import UserRepository from '../repositories/UserRepository'

export default async (
  request: ExpressRequest,
  response: ExpressResponse,
  next: NextFunction
) => {
  const { userId } = request

  const userRepository = getCustomRepository(UserRepository)

  const user = await userRepository.findOne(userId)

  if (!user || !user.admin)
    return response
      .status(401)
      .json({ message: 'User is not an administrator' })

  return next()
}
