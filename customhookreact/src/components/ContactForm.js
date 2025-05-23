import { useState } from "react";

export default function ContactForm({ onAdd }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tags, setTags] = useState("");
  const [favorite, setFavorite] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      id: Date.now().toString(),
      name,
      email,
      tags: tags.split(",").map((tag) => tag.trim()),
      favorite,
    };
    onAdd(newContact);
    setName("");
    setEmail("");
    setTags("");
    setFavorite(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className="input"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        className="input"
        placeholder="Tags (comma-separated)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={favorite}
          onChange={(e) => setFavorite(e.target.checked)}
        />{" "}
        Favorite
      </label>
      <button type="submit" className="button">
        Add Contact
      </button>
    </form>
  );
}
