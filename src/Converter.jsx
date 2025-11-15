import React, { useState, useEffect } from "react";
import { ArrowLeftRight, Sun, Moon } from "lucide-react";

export default function KalkulatorMataUang() {
  const [amount, setAmount] = useState(100);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("IDR");
  const [dark, setDark] = useState(false);

  const rates = {
    USD: 1,
    IDR: 15600,
    EUR: 0.92,
    JPY: 150,
    GBP: 0.79,
  };

  const result = ((amount / rates[from]) * rates[to]).toLocaleString(undefined, {
    maximumFractionDigits: 2,
  });

  const handleSwap = () => {
    setFrom(to);
    setTo(from);
  };

  // 🌓 kalau dark mode aktif, tambahkan class "dark" ke <html>
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-4 transition-colors duration-300">
      <div className="w-full max-w-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-2xl rounded-2xl p-6 transition-all duration-300">
        {/* Header */}
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
            Kalkulator Mata Uang
          </h1>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setDark((prev) => !prev)}
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition"
              title="Ganti mode gelap / terang"
            >
              {dark ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700" />
              )}
            </button>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              React + Tailwind
            </span>
          </div>
        </header>

        {/* Main */}
        <main className="space-y-5">
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

          {/* Pilihan */}
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] items-center gap-3">
            <div>
              <label className="block text-sm text-slate-600 dark:text-slate-300 mb-1">
                Dari
              </label>
              <select
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                className="w-full rounded-lg border border-slate-200 dark:border-slate-700 px-3 py-2 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-500"
              >
                {Object.keys(rates).map((k) => (
                  <option key={k} value={k}>
                    {k}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex justify-center items-center pt-6 sm:pt-7">
              <button
                onClick={handleSwap}
                className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-md transition transform hover:scale-105 active:scale-95"
                title="Tukar mata uang"
              >
                <ArrowLeftRight className="w-5 h-5" />
              </button>
            </div>

            <div>
              <label className="block text-sm text-slate-600 dark:text-slate-300 mb-1">
                Ke
              </label>
              <select
                value={to}
                onChange={(e) => setTo(e.target.value)}
                className="w-full rounded-lg border border-slate-200 dark:border-slate-700 px-3 py-2 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-indigo-100 dark:focus:ring-indigo-500"
              >
                {Object.keys(rates).map((k) => (
                  <option key={k} value={k}>
                    {k}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Hasil */}
          <div className="mt-5 bg-gradient-to-tr from-indigo-50 to-white dark:from-slate-800 dark:to-slate-900 border border-slate-100 dark:border-slate-700 rounded-xl p-4 shadow-inner transition-colors">
            <div className="text-sm text-slate-500 dark:text-slate-400">
              Hasil Konversi
            </div>
            <div className="mt-3 text-3xl font-semibold text-slate-800 dark:text-slate-100">
              {result}{" "}
              <span className="text-lg text-slate-600 dark:text-slate-400">{to}</span>
            </div>
          </div>
        </main>

        {/* <footer className="mt-6 text-xs text-slate-400 dark:text-slate-500 text-center">
          Contoh statis — untuk data real gunakan API exchange rate
        </footer> */}
      </div>
    </div>
  );
}