import { getCustomRepository } from 'typeorm'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

import UserRepository from '../../repositories/UserRepository'

import { JWT_KEY } from '../../env'

interface IAuthenticateUserRequest {
  email: string
  password: string
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateUserRequest) {
    const userRepository = getCustomRepository(UserRepository)

    const user = await userRepository.findOne({ email })

    if (!user) {
      throw new Error('Email/Password invalid')
    }

    const passwordMatched = compare(password, user.password)

    if (!passwordMatched) {
      throw new Error('Email/Password invalid')
    }

    const token = sign(
      {
        email: user.email
      },
      JWT_KEY,
      {
        subject: user.id,
        expiresIn: '5m'
      }
    )

    return token
  }
}

export default AuthenticateUserService
