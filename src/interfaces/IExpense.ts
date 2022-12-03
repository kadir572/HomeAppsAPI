import { IDebtor } from './IDebtor'

export interface IExpense {
  title: string
  description: string
  amount: number
  payor: string
  debtors: IDebtor[]
  createdDate: Date
  editedDate?: Date
  deletedDate?: Date
  _id?: string
}
