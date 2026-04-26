import { useReducer } from "react";
import { ExpenseForm } from "./components/ExpenseForm";
import type { Expense } from "./types/expense";
import { expenseReducer } from "./reducer/expenseReducer";
import { ExpenseList } from "./components/ExpenseList";

function App() {
  const [expenses, dispatch] = useReducer(expenseReducer, []);

  const onAdd = (expense: Expense) => {
    dispatch({ type: "ADD", payload: expense });
  };

  const deleteExpense = (id: Expense["id"]) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const total = expenses.reduce((acc, expense) => {
    return acc + expense.expense;
  }, 0);

  return (
    <main className="min-h-screen bg-slate-50 md:grid md:grid-cols-2">
      {/* Kiri — Form */}
      <div className="bg-white border-r border-slate-100 shadow-sm">
        <ExpenseForm onAdd={onAdd} />
      </div>

      {/* Kanan — List */}
      <div className="flex flex-col p-8 lg:p-12 gap-6">
        {/* Header */}
        <div>
          <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-1">
            Riwayat
          </p>
          <h2
            className="text-3xl font-bold text-slate-800"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Pengeluaran
          </h2>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto">
          <ExpenseList expenses={expenses} onDelete={deleteExpense} />
        </div>

        {/* Total */}
        {expenses.length > 0 && (
          <div className="border-t border-slate-200 pt-4 flex items-center justify-between">
            <span className="text-sm text-slate-500 font-medium">
              {expenses.length} pengeluaran
            </span>
            <div className="text-right">
              <p className="text-xs text-slate-400 uppercase tracking-widest mb-0.5">
                Total
              </p>
              <p className="text-2xl font-bold text-slate-800">
                Rp {total.toLocaleString("id-ID")}
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
