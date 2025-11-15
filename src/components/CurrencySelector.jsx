/**
 * src/components/CurrencySelector.jsx - Dropdown Pilihan Mata Uang dan Tombol Swap
 */
import React from "react";
import { ArrowLeftRight } from "lucide-react";

// Komponen Pembantu untuk dropdown
const CurrencyDropdown = ({ label, value, onChange, currencies }) => (
  <div>
    <label className="block text-sm text-slate-600 dark:text-slate-300 mb-1">
      {label}
    </label>
    <select
      value={value}
      onChange={onChange}
      className="w-full rounded-lg border border-slate-200 dark:border-slate-700 px-3 py-2 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-500"
    >
      {currencies.map((currency) => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))}
    </select>
  </div>
);

export default function CurrencySelector({
  from,
  setFrom,
  to,
  setTo,
  currencies,
  onSwap,
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] items-center gap-3">
      <CurrencyDropdown
        label="Dari"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        currencies={currencies}
      />

      <div className="flex justify-center items-center pt-6 sm:pt-7">
        <button
          onClick={onSwap}
          className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-md transition transform hover:scale-105 active:scale-95"
          title="Tukar mata uang"
        >
          <ArrowLeftRight className="w-5 h-5" />
        </button>
      </div>

      <CurrencyDropdown
        label="Ke"
        value={to}
        onChange={(e) => setTo(e.target.value)}
        currencies={currencies}
      />
    </div>
  );
}