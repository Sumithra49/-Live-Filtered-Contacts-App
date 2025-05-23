import React, { useState, useMemo, useCallback } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import SearchBar from "./components/SearchBar";
import ContactForm from "./components/ContactForm";
import ContactCard from "./components/ContactCard";

export default function App() {
  const [contacts, setContacts] = useLocalStorage("contacts", []);
  const [searchTerm, setSearchTerm] = useState("");

  const addContact = useCallback((newContact) => {
    setContacts((prev) => [newContact, ...prev]);
  }, [setContacts]);

  const deleteContact = useCallback((id) => {
    setContacts((prev) => prev.filter((c) => c.id !== id));
  }, [setContacts]);

  const filteredContacts = useMemo(() => {
    const term = searchTerm.toLowerCase();
    return contacts.filter(
      (c) =>
        c.name.toLowerCase().includes(term) ||
        c.tags.some((tag) => tag.toLowerCase().includes(term))
    );
  }, [contacts, searchTerm]);

  return (
    <div className="app-container">
      <h1>📇 Contacts</h1>
      <SearchBar onSearch={setSearchTerm} />
      <ContactForm onAdd={addContact} />
      <div className="contact-list">
        {filteredContacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} onDelete={deleteContact} />
        ))}
      </div>
    </div>
  );
}
