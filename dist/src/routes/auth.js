"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
const express_1 = require("express");
const authControllers = __importStar(require("../controllers/auth"));
const validations_middleware_1 = require("../middlewares/validations-middleware");
const auth_1 = require("../validators/auth");
const authRouter = (0, express_1.Router)();
const { getUsers, registerUsers, loginUsers } = authControllers;
authRouter.get('/get-users', getUsers);
authRouter.post('/register', auth_1.validation.registerValidation, validations_middleware_1.validationMiddleware, registerUsers);
authRouter.post('/login', auth_1.validation.loginValidation, validations_middleware_1.validationMiddleware, loginUsers);
authRouter.get('/logout', authControllers.logout);
module.exports = authRouter;
