import React, { useState } from "react";

export default function MultiForm() {
  const [form, setForm] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-2">
      <input
        type="text"
        name="name"
        placeholder="Enter name"
        value={form.name}
        onChange={handleChange}
        className="border px-2 py-1 rounded block"
      />
      <input
        type="email"
        name="email"
        placeholder="Enter email"
        value={form.email}
        onChange={handleChange}
        className="border px-2 py-1 rounded block"
      />
      <button type="submit" className="px-3 py-1 bg-green-500 text-white rounded">
        Submit
      </button>
    </form>
  );
}
