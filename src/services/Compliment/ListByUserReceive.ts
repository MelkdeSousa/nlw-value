import { getCustomRepository } from 'typeorm'

import ComplimentRepository from '../../repositories/ComplimentRepository'

class ListComplimentsByUserReceiveService {
  async execute(userReceiveId: string) {
    const complimentRepository = getCustomRepository(ComplimentRepository)

    const compliments = await complimentRepository.find({
      where: {
        user_receiver: userReceiveId
      },
      relations: ['userSender', 'userReceiver', 'tag']
    })

    return compliments
  }
}

export default ListComplimentsByUserReceiveService
