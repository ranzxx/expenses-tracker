import type { Expense } from "../types/expense"

type Action = 
    | { type: 'ADD', payload: Expense } 
    | { type: 'DELETE', payload: number };

export const expenseReducer = (state: Expense[], action: Action) => {
    const {type} = action;
    switch (type) {
        case 'ADD': {
            return [...state, action.payload]
        }
        case 'DELETE': {
            return state.filter(item => item.id !== action.payload)
        }
        default:
            return [...state]
    }
}