/**
 * src/KalkulatorMataUang.jsx - Komponen utama dan orchestrator
 */
import React from "react";
import useCurrency from "./hooks/useCurrency";
import Header from "./components/Header";
import AmountInput from "./components/AmountInput";
import CurrencySelector from "./components/CurrencySelector";
import ResultDisplay from "./components/ResultDisplay";

export default function KalkulatorMataUang() {
  // Ambil semua state dan handler dari custom hook
  const {
    amount,
    setAmount,
    from,
    setFrom,
    to,
    setTo,
    dark,
    handleToggleDark,
    currencies,
    result,
    loading,
    error,
    handleSwap,
  } = useCurrency();

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-4 transition-colors duration-300">
      <div className="w-full max-w-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-2xl rounded-2xl p-6 transition-all duration-300">
        {/* Header */}
        <Header dark={dark} onToggleDark={handleToggleDark} />

        {/* Main Content */}
        <main className="space-y-5">
          {/* Input Jumlah */}
          <AmountInput amount={amount} setAmount={setAmount} />

          {/* Pilihan Mata Uang & Swap */}
          <CurrencySelector
            from={from}
            setFrom={setFrom}
            to={to}
            setTo={setTo}
            currencies={currencies}
            onSwap={handleSwap}
          />

          {/* Hasil Konversi */}
          <ResultDisplay
            result={result}
            to={to}
            loading={loading}
            error={error}
          />
        </main>
      </div>
    </div>
  );
}