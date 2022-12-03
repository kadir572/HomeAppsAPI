import {
  addExpense,
  deleteExpense,
  toggleDebtorPaidStatus,
} from './../controllers/expensesController'
import express from 'express'
import { getAllExpenses } from '../controllers/expensesController'
const router = express.Router()

router.get('/', getAllExpenses)
router.post('/', addExpense)
router.put('/:id/debtor/:debtorId', toggleDebtorPaidStatus)
router.delete('/:id', deleteExpense)

export default router
