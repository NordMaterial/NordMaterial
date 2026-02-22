"use client";

import { useState } from "react";

export default function ContactForm() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Odesílám...");

    try {
      const res = await fetch("/api/contact/route", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Zpráva byla úspěšně odeslána! ✅");
        setMessage("");
      } else {
        setStatus("Chyba při odesílání: " + data.error);
      }
    } catch (error) {
      setStatus("Chyba: " + error.message);
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "2rem auto" }}>
      <h1>Kontaktujte nás</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Napište zprávu..."
          rows={6}
          style={{ width: "100%", padding: "0.5rem", marginBottom: "1rem" }}
          required
        />
        <button type="submit" style={{ padding: "0.5rem 1rem" }}>
          Odeslat
        </button>
      </form>
      {status && <p style={{ marginTop: "1rem" }}>{status}</p>}
    </div>
  );
}