import dotenv from 'dotenv'
import cors from 'cors'
import express from 'express'

import connectDB from './db/db'
import expensesRouter from './routes/expensesRoutes'

// initialize configuration
dotenv.config()
const PORT = process.env.PORT || process.env.SERVER_PORT

// DB Connection
connectDB()

const app = express()
const whitelist = [process.env.UI_URL]

const corsOptions = {
  origin: (origin: string, callback: any) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/expense', expensesRouter)

app.listen(PORT, () => {
  // tslint:disable-next-line:no-console
  console.log(`App is running on port ${PORT}`)
})
