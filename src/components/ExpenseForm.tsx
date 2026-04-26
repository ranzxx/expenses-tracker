import { useState } from "react";
import type { Expense } from "../types/expense";

interface ExpenseFormProps {
  onAdd: (item: Expense) => void;
}

export const ExpenseForm = ({ onAdd }: ExpenseFormProps) => {
  const [item, setItem] = useState<string>("");
  const [expense, setExpense] = useState<number>(0);
  const [category, setCategory] = useState<Expense["category"]>("Makan");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = () => {
    const newExpense: Expense = {
      id: Date.now(),
      item,
      expense,
      category,
    };
    if (newExpense.item === "" || newExpense.expense === 0) {
      setError("Nama barang dan harga tidak boleh kosong.");
      return false;
    }
    setError(null);
    onAdd(newExpense);
    setItem("");
    setExpense(0);
    setCategory("Makan");
  };

  const categoryColors: Record<Expense["category"], string> = {
    Makan: "#F97316",
    Transport: "#3B82F6",
    Hiburan: "#A855F7",
    Kebutuhan: "#22C55E",
  };

  return (
    <div className="h-full flex flex-col justify-center p-8 lg:p-12">
      <div className="mb-8">
        <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-1">
          Pencatatan
        </p>
        <h2
          className="text-3xl font-bold text-slate-800"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          Tambah Pengeluaran
        </h2>
      </div>

      <div className="space-y-5">
        {/* Item */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="item"
            className="text-xs font-semibold tracking-widest text-slate-500 uppercase"
          >
            Nama Barang
          </label>
          <input
            type="text"
            id="item"
            placeholder="Contoh: Kopi susu, GoJek, dll"
            className="border-b-2 border-slate-200 focus:border-slate-800 outline-none py-2 text-slate-800 placeholder-slate-300 bg-transparent transition-colors duration-200"
            onChange={(e) => setItem(e.target.value)}
            value={item}
          />
        </div>

        {/* Harga */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="expense"
            className="text-xs font-semibold tracking-widest text-slate-500 uppercase"
          >
            Harga (Rp)
          </label>
          <input
            type="number"
            id="expense"
            placeholder="0"
            className="border-b-2 border-slate-200 focus:border-slate-800 outline-none py-2 text-slate-800 placeholder-slate-300 bg-transparent transition-colors duration-200"
            onChange={(e) => setExpense(Number(e.target.value))}
            value={expense === 0 ? "" : expense}
          />
        </div>

        {/* Kategori */}
        <div className="flex flex-col gap-2">
          <label className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
            Kategori
          </label>
          <div className="flex flex-wrap gap-2">
            {(
              [
                "Makan",
                "Transport",
                "Hiburan",
                "Kebutuhan",
              ] as Expense["category"][]
            ).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className="px-4 py-1.5 rounded-full text-sm font-medium border-2 transition-all duration-200"
                style={{
                  borderColor: categoryColors[cat],
                  backgroundColor:
                    category === cat ? categoryColors[cat] : "transparent",
                  color: category === cat ? "white" : categoryColors[cat],
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Error */}
        {error && (
          <p className="text-red-400 text-sm flex items-center gap-1">
            <span>⚠</span> {error}
          </p>
        )}

        {/* Submit */}
        <button
          onClick={handleSubmit}
          className="w-full bg-slate-800 hover:bg-slate-700 text-white py-3 rounded-xl font-semibold tracking-wide transition-colors duration-200 mt-2"
        >
          + Tambah
        </button>
      </div>
    </div>
  );
};
