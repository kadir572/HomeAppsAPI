"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const expenseSchema = new mongoose_1.Schema({
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
});
exports.default = (0, mongoose_1.model)('Expense', expenseSchema);
//# sourceMappingURL=Expense.js.map