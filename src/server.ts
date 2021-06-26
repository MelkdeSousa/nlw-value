import 'reflect-metadata'
import 'express-async-errors'
import 'dotenv/config'

import './database/connection'

import { app } from './app'
import { PORT } from './env'

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT} 🥳`)
  }
)
