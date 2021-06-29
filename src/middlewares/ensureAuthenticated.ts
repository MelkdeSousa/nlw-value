import {
  Request as ExpressRequest,
  Response as ExpressResponse,
  NextFunction
} from 'express'
import { verify } from 'jsonwebtoken'

import { JWT_KEY } from '../env'

export default (
  request: ExpressRequest,
  response: ExpressResponse,
  next: NextFunction
) => {
  const bearerToken = request.headers.authorization

  if (!bearerToken)
    return response.status(401).json({
      error: 'Missing Bearer Token'
    })

  const [bearer, token] = bearerToken.split(' ')

  if (!bearer || bearer !== 'Bearer' || !token)
    return response.status(401).json({
      error: 'Signature token invalid'
    })

  try {
    const { sub: userId } = verify(token, JWT_KEY)

    request.userId = userId as string

    return next()
  } catch (err) {
    console.log(`Fail: ${err}`)

    return response.status(401).json({
      error: err.message
    })
  }
}
