import React, { useReducer, createContext } from "react";
import contextReducer from "./contextReducer";

const initialState = JSON.parse(localStorage.getItem("transaction")) || [];
export const ExpenseTrackerContext = createContext(initialState);

const ExpenseTrackerProvider = ({ children }) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    const deleteTransaction = (id) =>
        dispatch({ type: "DELETE_TRANSACTION", payload: id });

    const addTransaction = (transaction) =>
        dispatch({ type: "ADD_TRANSACTION", payload: transaction });

    const balance = transactions.reduce(
        (acc, curVal) =>
            curVal.type === "Expense"
                ? acc - curVal.amount
                : acc + curVal.amount,
        0
    );
    return (
        <ExpenseTrackerContext.Provider
            value={{ deleteTransaction, addTransaction, transactions, balance }}
        >
            {children}
        </ExpenseTrackerContext.Provider>
    );
};

export default ExpenseTrackerProvider;
