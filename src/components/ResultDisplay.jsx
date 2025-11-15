/**
 * src/components/ResultDisplay.jsx - Menampilkan Hasil Konversi
 */
import React from "react";

export default function ResultDisplay({ result, to, loading, error }) {
  return (
    <div className="mt-5 bg-gradient-to-tr from-indigo-50 to-white dark:from-slate-800 dark:to-slate-900 border border-slate-100 dark:border-slate-700 rounded-xl p-4 shadow-inner transition-colors">
      <div className="text-sm text-slate-500 dark:text-slate-400">
        Hasil Konversi {loading && <span className="animate-pulse">⏳</span>}
      </div>
      {error ? (
        <div className="mt-3 text-lg text-red-500 dark:text-red-400">
          {error}
        </div>
      ) : (
        <div className="mt-3 text-3xl font-semibold text-slate-800 dark:text-slate-100">
          {result}{" "}
          <span className="text-lg text-slate-600 dark:text-slate-400">{to}</span>
        </div>
      )}
    </div>
  );
}