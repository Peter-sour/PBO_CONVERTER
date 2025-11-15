/**
 * src/hooks/useCurrency.js - Logika state dan efek samping
 */
import { useState, useEffect } from "react";
import { getCurrencies, convertCurrency } from "../api";

export default function useCurrency() {
  const [amount, setAmount] = useState(100);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("IDR");
  const [dark, setDark] = useState(false);
  const [currencies, setCurrencies] = useState([]);
  const [result, setResult] = useState("0");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 1. Load currencies on mount
  useEffect(() => {
    async function loadCurrencies() {
      try {
        // Menerima Objek JSON dari Spring Boot: { "USD": 1.0, "IDR": 15500.0, ... }
        const ratesObject = await getCurrencies(); 
        
        // <-- PERBAIKAN DI SINI: Ekstrak Keys (kode mata uang) dari Objek
        const currencyCodes = Object.keys(ratesObject); 
        
        setCurrencies(currencyCodes); // Mengisi dropdown dengan Array of Strings
      } catch (err) {
        setError("Gagal memuat mata uang");
        console.error(err);
      }
    }
    loadCurrencies();
  }, []); // Dependensi kosong, hanya dijalankan saat mount

  // 2. Convert currency whenever amount, from, or to changes
  useEffect(() => {
    async function convert() {
      // Hanya konversi jika jumlah valid
      if (!amount || parseFloat(amount) <= 0) {
        setResult("0");
        return;
      }

      setLoading(true);
      setError(null);

      try {
        // getCurrencies menerima Objek dari Spring Boot: { result: 155000.0, rate: 15500.0, ... }
        const data = await convertCurrency(from, to, parseFloat(amount));
        
        setResult(
          // Gunakan data.result yang dikirim dari backend
          parseFloat(data.result).toLocaleString(undefined, {
            maximumFractionDigits: 2,
          })
        );
      } catch (err) {
        setError(err.message || "Gagal konversi");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    convert();
  }, [amount, from, to]); // Dependensi

  // 3. Dark mode handler (DOM manipulation)
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  const handleSwap = () => {
    setFrom(to);
    setTo(from);
  };

  const handleToggleDark = () => {
    setDark((prev) => !prev);
  };

  return {
    // State values
    amount, from, to, dark, currencies, result, loading, error,
    // State setters
    setAmount, setFrom, setTo,
    // Handlers
    handleSwap, handleToggleDark,
  };
}