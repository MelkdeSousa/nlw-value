import { User } from 'src/models/User'
import { customUserRepository } from 'src/repositories/UserRepository'

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
    const userRepository = customUserRepository

    if (!email) throw new Error('Email required')

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
