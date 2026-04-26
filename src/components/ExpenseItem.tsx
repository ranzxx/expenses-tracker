import type { Expense } from "../types/expense";

interface ExpenseItemProps {
  onDelete: (id: Expense["id"]) => void;
}

const categoryColors: Record<
  Expense["category"],
  { bg: string; text: string }
> = {
  Makan: { bg: "#FFF7ED", text: "#F97316" },
  Transport: { bg: "#EFF6FF", text: "#3B82F6" },
  Hiburan: { bg: "#FAF5FF", text: "#A855F7" },
  Kebutuhan: { bg: "#F0FDF4", text: "#22C55E" },
};

export const ExpenseItem = (props: Expense & ExpenseItemProps) => {
  const { onDelete } = props;
  const color = categoryColors[props.category];

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all duration-200 group">
      <div className="flex items-center gap-3">
        <span
          className="text-xs font-semibold px-2.5 py-1 rounded-full"
          style={{ backgroundColor: color.bg, color: color.text }}
        >
          {props.category}
        </span>
        <span className="text-slate-700 font-medium">{props.item}</span>
      </div>

      <div className="flex items-center gap-4">
        <span className="font-semibold text-slate-800">
          Rp {props.expense.toLocaleString("id-ID")}
        </span>
        <button
          onClick={() => onDelete(props.id)}
          className="text-slate-300 hover:text-red-400 transition-colors duration-200 opacity-0 group-hover:opacity-100 text-lg leading-none"
          title="Hapus"
        >
          ×
        </button>
      </div>
    </div>
  );
};
