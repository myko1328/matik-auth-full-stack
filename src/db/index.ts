// import { text } from "express";
import { Pool, Query, QueryParse } from 'pg'

export const db = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'matik_db',
    password: 'Myko123',
    port: 5432,
});

