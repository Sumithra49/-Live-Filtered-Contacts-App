import { useState, useEffect } from "react";

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      onSearch(input);
    }, 300);
    return () => clearTimeout(timeout);
  }, [input, onSearch]);

  return (
    <input
      className="input"
      placeholder="Search by name or tag..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
  );
}
