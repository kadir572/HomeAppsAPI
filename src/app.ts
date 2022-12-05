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
app.use(
  cors({
    origin: 'https://home-apps.netlify.app',
  })
)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/expense', expensesRouter)

app.listen(PORT, () => {
  // tslint:disable-next-line:no-console
  console.log(`App is running on port ${PORT}`)
})
