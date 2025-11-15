/**
 * src/api.js - Komunikasi dengan backend Spring Boot
 */
const API_BASE = "http://localhost:8080/api"; // alamat backend Spring Boot

export async function getInfo() {
  try {
    const res = await fetch(`${API_BASE}/`);
    if (!res.ok) throw new Error("Gagal mengambil info API");
    return res.json();
  } catch (error) {
    console.error("Error getInfo:", error);
    throw error;
  }
}

export async function getCurrencies() {
  try {
    const res = await fetch(`${API_BASE}/currencies`);
    if (!res.ok) throw new Error("Gagal mengambil daftar mata uang");
    return res.json();
  } catch (error) {
    console.error("Error getCurrencies:", error);
    throw error;
  }
}

export async function convertCurrency(from, to, amount) {
  try {
    const res = await fetch(`${API_BASE}/convert`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ from, to, amount }),
    });
    if (!res.ok) {
      // Coba parse body error dari backend
      const errorBody = await res.json().catch(() => ({ message: res.statusText }));
      throw new Error(errorBody.message || "Gagal konversi dari backend");
    }
    return res.json(); // Mengembalikan objek { result: number }
  } catch (error) {
    console.error("Error convertCurrency:", error);
    throw error;
  }
}