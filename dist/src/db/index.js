"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
// import { text } from "express";
const pg_1 = require("pg");
exports.db = new pg_1.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'matik_db',
    password: 'Myko123',
    port: 5432,
});
