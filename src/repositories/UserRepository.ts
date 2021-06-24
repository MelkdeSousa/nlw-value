import { User } from 'src/models/User'
import { EntityRepository, getCustomRepository, Repository } from 'typeorm'

export class UserRepository extends Repository<User> {}

export const customUserRepository = getCustomRepository(UserRepository)
