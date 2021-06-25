import { getCustomRepository } from 'typeorm'
import { Tag } from '../../models/Tag'
import TagRepository from '../../repositories/TagRepository'

interface ITagRequest {
  name: string
}

interface ICreateTagService {
  execute(tag: ITagRequest): Promise<Tag>
}

class CreateTagService implements ICreateTagService {
  async execute({ name }: ITagRequest) {
    if (!name) throw new Error('Name required')
    const tagRepository = getCustomRepository(TagRepository)

    const tagAlreadyExists = await tagRepository.findOne({ name })

    if (tagAlreadyExists) throw new Error('Tag already exists')

    const tag = tagRepository.create({
      name,
    })

    await tagRepository.save(tag)

    return tag
  }
}

export default CreateTagService
