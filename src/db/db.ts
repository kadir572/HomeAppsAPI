import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    // tslint:disable-next-line:no-console
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.log(err)
    process.exit(1)
  }
}

export default connectDB
