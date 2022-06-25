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
exports.logout = exports.loginUsers = exports.registerUsers = exports.getUsers = void 0;
const bcryptjs_1 = require("bcryptjs");
const db_1 = require("../db");
const jsonwebtoken_1 = require("jsonwebtoken");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const secret = process.env.SECRET;
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { rows } = yield db_1.db.query('select user_id, email from users');
        return res.status(200).json({
            success: true,
            users: rows,
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.getUsers = getUsers;
const registerUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password, business_name } = req.body;
    try {
        const hashedPassword = yield (0, bcryptjs_1.hash)(password, 10);
        yield db_1.db.query('insert into users(email,password,business_name) values ($1 , $2, $3)', [email, hashedPassword, business_name]);
        return res.status(201).json({
            success: true,
            message: 'The registraion was succefull',
        });
    }
    catch (error) {
        console.log(error.message);
        return res.status(500).json({
            error: error.message,
        });
    }
});
exports.registerUsers = registerUsers;
const loginUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let user = req.user;
    let payload = {
        id: user === null || user === void 0 ? void 0 : user.user_id,
        email: user === null || user === void 0 ? void 0 : user.email,
    };
    try {
        const token = yield (0, jsonwebtoken_1.sign)(payload, secret);
        return res.status(200).cookie('token', token, { httpOnly: true }).json({
            success: true,
            message: 'Logged in succefully',
        });
    }
    catch (error) {
        console.log(error.message);
        return res.status(500).json({
            error: error.message,
        });
    }
});
exports.loginUsers = loginUsers;
const logout = (req, res) => {
    try {
        return res.status(200).clearCookie('token', { httpOnly: true }).json({
            success: true,
            message: 'Logged out succefully',
        });
    }
    catch (error) {
        console.log(error.message);
        return res.status(500).json({
            error: error.message,
        });
    }
};
exports.logout = logout;
