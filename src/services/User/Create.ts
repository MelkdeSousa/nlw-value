import { getCustomRepository } from 'typeorm'
import { User } from '../../models/User'
import UserRepository from '../../repositories/UserRepository'

interface IUserRequest {
  name: string
  email: string
  admin?: boolean
}

interface ICreateUserService {
  execute(user: IUserRequest): Promise<User>
}

class CreateUserService implements ICreateUserService {
  async execute({ name, email, admin }: IUserRequest) {
    if (!email) throw new Error('Email required')
    const userRepository = getCustomRepository(UserRepository)

    const userAlreadyExists = await userRepository.findOne({ email })

    if (userAlreadyExists) throw new Error('User already exists')

    const user = userRepository.create({
      name,
      email,
      admin,
    })

    await userRepository.save(user)

    return user
  }
}

export default CreateUserService
