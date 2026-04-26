import type { Expense } from "../types/expense";
import { ExpenseItem } from "./ExpenseItem";

interface ExpenseListProps {
  onDelete: (id: Expense["id"]) => void;
  expenses: Expense[];
}

export const ExpenseList = (props: ExpenseListProps) => {
  const { onDelete } = props;

  return (
    <div className="flex flex-col gap-2">
      {props.expenses.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <span className="text-4xl mb-3">🧾</span>
          <p className="text-slate-400 text-sm">Belum ada pengeluaran.</p>
          <p className="text-slate-300 text-xs mt-1">
            Tambahkan pengeluaran pertamamu!
          </p>
        </div>
      ) : (
        props.expenses.map((expense) => (
          <ExpenseItem key={expense.id} {...expense} onDelete={onDelete} />
        ))
      )}
    </div>
  );
};
