import { getCustomRepository } from 'typeorm'

import ComplimentRepository from '../../repositories/ComplimentRepository'

class ListComplimentsByUserSendService {
  async execute(userSendId: string) {
    const complimentRepository = getCustomRepository(ComplimentRepository)

    const compliments = await complimentRepository.find({
      where: {
        user_sender: userSendId
      },
      relations: ['userSender', 'userReceiver', 'tag']
    })

    return compliments
  }
}

export default ListComplimentsByUserSendService
