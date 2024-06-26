"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const expensesController_1 = require("./../controllers/expensesController");
const express_1 = __importDefault(require("express"));
const expensesController_2 = require("../controllers/expensesController");
const router = express_1.default.Router();
router.get('/', expensesController_2.getAllExpenses);
router.post('/', expensesController_1.addExpense);
router.put('/:id/debtor/:debtorId', expensesController_1.toggleDebtorPaidStatus);
router.delete('/:id', expensesController_1.deleteExpense);
exports.default = router;
//# sourceMappingURL=expensesRoutes.js.map