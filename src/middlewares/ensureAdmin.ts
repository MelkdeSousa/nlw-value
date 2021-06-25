import {
  Request as ExpressRequest,
  Response as ExpressResponse,
  NextFunction,
} from 'express'

export default (
  request: ExpressRequest,
  response: ExpressResponse,
  next: NextFunction
) => {
  const admin = true

  if (admin) {
    return next()
  }

  return response.status(401)
}
