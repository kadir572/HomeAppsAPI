import { addExpense, deleteExpense } from './../controllers/expensesController'
import express from 'express'
import { getAllExpenses } from '../controllers/expensesController'
const router = express.Router()

router.get('/', getAllExpenses)
router.post('/', addExpense)
router.delete('/:id', deleteExpense)

export default router
