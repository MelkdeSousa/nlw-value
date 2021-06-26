import { Compliment } from '../models/Compliment'
import { EntityRepository, Repository } from 'typeorm'

@EntityRepository(Compliment)
class ComplimentRepository extends Repository<Compliment> {}

export default ComplimentRepository
