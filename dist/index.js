"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const passport_1 = __importDefault(require("passport"));
//routers
const auth_1 = __importDefault(require("./src/routes/auth"));
const employee_1 = __importDefault(require("./src/routes/employee"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(passport_1.default.initialize());
app.use('/api/auth', auth_1.default);
app.use('/api/employee', employee_1.default);
const appStart = () => {
    try {
        app.listen(port, () => {
            console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
        });
    }
    catch (error) {
        console.log(`Error: ${error.message}`);
    }
};
appStart();
