"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      setSuccess("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300 flex items-center justify-center px-6">
      <div className="max-w-xl w-full bg-white/90 backdrop-blur rounded-3xl shadow-2xl p-10 border border-purple-100">

        <h1 className="text-4xl font-extrabold text-purple-700 mb-4 text-center">
          Contact Us
        </h1>

        <p className="text-gray-600 text-center mb-10 text-lg">
          Have questions or feedback? We’d love to hear from you.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="px-5 py-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="px-5 py-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500"
          />

          <textarea
            rows="4"
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            className="px-5 py-3 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-gradient-to-r from-purple-600 to-purple-700 text-white font-bold py-3 rounded-2xl shadow-lg active:scale-95"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-green-600 text-center font-medium">
              {success}
            </p>
          )}
        </form>

      </div>
    </main>
  );
}
