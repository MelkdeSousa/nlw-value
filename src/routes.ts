import { Router } from 'express'

import CreateUserController from './controllers/User/Create'
import CreateTagController from './controllers/Tag/Create'

import ensureAdmin from './middlewares/ensureAdmin'

const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()

router.post('/users', createUserController.handle)
router.post('/tags', ensureAdmin, createTagController.handle)

export { router }
