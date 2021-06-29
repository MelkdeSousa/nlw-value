import { Router } from 'express'

import ensureAuthenticated from './middlewares/ensureAuthenticated'
import ensureAdmin from './middlewares/ensureAdmin'

import CreateUserController from './controllers/User/Create'
import ListUsersController from './controllers/User/List'

import CreateTagController from './controllers/Tag/Create'
import ListTagsController from './controllers/Tag/List'

import AuthenticateUserController from './controllers/User/Authenticate'

import CreateComplimentController from './controllers/Compliment/Create'
import ListComplimentsByUserSendController from './controllers/Compliment/ListByUserSend'
import ListComplimentsByUserReceiveController from './controllers/Compliment/ListByUserReceive'

const router = Router()

const createUserController = new CreateUserController()
const listUsersController = new ListUsersController()

const createTagController = new CreateTagController()
const listTagsController = new ListTagsController()

const authenticateUserController = new AuthenticateUserController()

const createComplementController = new CreateComplimentController()
const listComplimentsByUserSendController =
  new ListComplimentsByUserSendController()
const listComplimentsByUserReceiveController =
  new ListComplimentsByUserReceiveController()

router.post('/users', createUserController.handle)
router.get(
  '/users',
  ensureAuthenticated,
  ensureAdmin,
  listUsersController.handle
)

router.post(
  '/tags',
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle
)

router.get('/tags', ensureAuthenticated, listTagsController.handle)

router.post('/auth', authenticateUserController.handle)

router.post(
  '/compliments',
  ensureAuthenticated,
  createComplementController.handle
)
router.get(
  '/compliments/send',
  ensureAuthenticated,
  listComplimentsByUserSendController.handle
)
router.get(
  '/compliments/receive',
  ensureAuthenticated,
  listComplimentsByUserReceiveController.handle
)

export { router }
