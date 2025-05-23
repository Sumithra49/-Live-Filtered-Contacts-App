import React from "react";

const ContactCard = React.memo(({ contact, onDelete }) => {
   return (
    <div className="contact-card">
      <h3>
        {contact.name} {contact.favorite && "⭐"}
      </h3>
      <p>{contact.email}</p>
      <p>Tags: {contact.tags.join(", ")}</p>
      <button className="delete-button" onClick={() => onDelete(contact.id)}>
        Delete
      </button>
    </div>
  );
});

export default ContactCard;
