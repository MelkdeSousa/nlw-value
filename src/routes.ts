import { Router } from 'express'

import CreateUserController from './controllers/User/Create'
import CreateTagController from './controllers/Tag/Create'
import AuthenticateUserController from './controllers/User/Authenticate'
import CreateComplimentController from './controllers/Compliment/Create'

import ensureAdmin from './middlewares/ensureAdmin'

const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const createComplementController = new CreateComplimentController()

router.post('/users', createUserController.handle)
router.post('/tags', ensureAdmin, createTagController.handle)
router.post('/auth', authenticateUserController.handle)
router.post('/compliments', createComplementController.handle)

export { router }
