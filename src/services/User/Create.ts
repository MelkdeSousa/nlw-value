import { getCustomRepository } from 'typeorm'
import { hash } from 'bcryptjs'

import UserRepository from '../../repositories/UserRepository'

import { SALT_HASH } from '../../env'
import AuthenticateUserService from './Authenticate'

interface IUserRequest {
  name: string
  email: string
  password: string
  admin?: boolean
}

interface IUserResponse {
  id: string
  name: string
  admin: boolean
  email: string
  created_at: Date
}

interface ICreateUserService {
  execute(user: IUserRequest): Promise<IUserResponse>
}

class CreateUserService implements ICreateUserService {
  async execute({ name, email, password, admin = false }: IUserRequest) {
    if (!email) throw new Error('Email required')
    const userRepository = getCustomRepository(UserRepository)
    const authenticatedUserService = new AuthenticateUserService()

    const userAlreadyExists = await userRepository.findOne({ email })

    if (userAlreadyExists) throw new Error('User already exists')

    const passwordHash = await hash(password, SALT_HASH)

    const user = userRepository.create({
      name,
      email,
      password: passwordHash,
      admin
    })

    await userRepository.save(user)

    const token = await authenticatedUserService.execute({
      email: user.email,
      password: user.password
    })

    return {
      token,
      ...user
    }
  }
}

export default CreateUserService
