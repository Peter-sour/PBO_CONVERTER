/**
 * src/components/AmountInput.jsx - Input Jumlah
 */
import React from "react";

export default function AmountInput({ amount, setAmount }) {
  return (
    <div>
      <label className="block text-sm text-slate-600 dark:text-slate-300 mb-1">
        Jumlah
      </label>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full rounded-lg border border-slate-200 dark:border-slate-700 px-4 py-2 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-500"
      />
    </div>
  );
}