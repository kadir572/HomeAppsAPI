import { Schema, model } from 'mongoose'
import { IExpense } from '../interfaces/IExpense'

const expenseSchema = new Schema<IExpense>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  amount: {
    type: Number,
    required: true,
  },
  payor: {
    type: String,
    required: true,
  },
  debtors: [
    {
      name: {
        type: String,
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      },
      paid: {
        type: Boolean,
        default: false,
      },
    },
  ],
  createdDate: {
    type: Date,
    default: Date.now(),
  },
  editedDate: {
    type: Date,
  },
  deletedDate: {
    type: Date,
  },
})

export default model('Expense', expenseSchema)
