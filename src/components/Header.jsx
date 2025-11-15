/**
 * src/components/Header.jsx - Header dan tombol Dark Mode
 */
import React from "react";
import { Sun, Moon } from "lucide-react";

export default function Header({ dark, onToggleDark }) {
  return (
    <header className="flex items-center justify-between mb-6">
      <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
        Kalkulator Mata Uang
      </h1>
      <div className="flex items-center gap-2">
        <button
          onClick={onToggleDark}
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
  );
}