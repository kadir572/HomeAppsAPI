"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./db/db"));
const expensesRoutes_1 = __importDefault(require("./routes/expensesRoutes"));
// initialize configuration
dotenv_1.default.config();
const PORT = process.env.PORT || process.env.SERVER_PORT;
// DB Connection
(0, db_1.default)();
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: 'http://localhost:5173',
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/expense', expensesRoutes_1.default);
app.listen(PORT, () => {
    // tslint:disable-next-line:no-console
    console.log(`App is running on port ${PORT}`);
});
//# sourceMappingURL=app.js.map