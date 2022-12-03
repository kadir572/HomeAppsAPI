"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteExpense = exports.addExpense = exports.getAllExpenses = void 0;
const Expense_1 = __importDefault(require("../models/Expense"));
const getAllExpenses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allExpenses = yield Expense_1.default.find();
        res.status(200).json(allExpenses);
    }
    catch (err) {
        res.status(400).json({ message: err });
    }
});
exports.getAllExpenses = getAllExpenses;
const addExpense = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newExpense = new Expense_1.default(Object.assign({}, req.body));
        yield newExpense.save();
        return res.status(200).json(newExpense);
    }
    catch (err) {
        res.status(400).json({ message: err });
    }
});
exports.addExpense = addExpense;
const deleteExpense = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const expenseToDelete = yield Expense_1.default.findById(id);
        if (!expenseToDelete) {
            return res.json({ message: 'Expense not found' });
        }
        yield expenseToDelete.deleteOne();
        return res.status(200).json(expenseToDelete);
    }
    catch (err) {
        res.status(400).json({ message: err });
    }
});
exports.deleteExpense = deleteExpense;
//# sourceMappingURL=expensesController.js.map