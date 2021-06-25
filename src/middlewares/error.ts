import {
  Request as ExpressRequest,
  Response as ExpressResponse,
  NextFunction,
} from 'express'

export default (
  err: Error,
  request: ExpressRequest,
  response: ExpressResponse,
  next: NextFunction
) => {
  if (err instanceof Error)
    return response.status(400).json({
      error: err.message,
    })

  return response.status(500).json({
    message: 'Internal Server error',
  })
}
