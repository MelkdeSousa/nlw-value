import { Router } from 'express'
import CreateUserController from './controllers/User/Create'

export const router = Router()

const createUserController = new CreateUserController()

router.post('/user', createUserController.handle)
