"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmployees = exports.viewEmployee = exports.addEmployee = void 0;
const addEmployee = (req, res) => {
    res.status(201).json({
        success: true
    });
};
exports.addEmployee = addEmployee;
const viewEmployee = (req, res) => {
    res.status(201).json({
        success: true
    });
};
exports.viewEmployee = viewEmployee;
const getEmployees = (req, res) => {
    res.status(201).json({
        success: true
    });
};
exports.getEmployees = getEmployees;
