import { Request, Response } from 'express'
import Expense from '../models/Expense'

export const getAllExpenses = async (req: Request, res: Response) => {
  try {
    const allExpenses = await Expense.find()

    res.status(200).json(allExpenses)
  } catch (err) {
    res.status(400).json({ message: err })
  }
}

export const addExpense = async (req: Request, res: Response) => {
  try {
    const newExpense = new Expense({ ...req.body })
    await newExpense.save()

    return res.status(200).json(newExpense)
  } catch (err) {
    res.status(400).json({ message: err })
  }
}

export const deleteExpense = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const expenseToDelete = await Expense.findById(id)

    if (!expenseToDelete) {
      return res.json({ message: 'Expense not found' })
    }

    await expenseToDelete.deleteOne()

    return res.status(200).json(expenseToDelete)
  } catch (err) {
    res.status(400).json({ message: err })
  }
}
