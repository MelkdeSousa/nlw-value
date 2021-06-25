import { Tag } from '../models/Tag'
import { EntityRepository, Repository } from 'typeorm'

@EntityRepository(Tag)
class TagRepository extends Repository<Tag> {}

export default TagRepository
