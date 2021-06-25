import { createConnection } from 'typeorm'

createConnection()
  .then(() => console.log('Connection successfully 🎉'))
  .catch(err => console.error('🤯 Failed connection: ', err))
