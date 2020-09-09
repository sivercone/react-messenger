//38:50

import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const ContactsContext = React.createContext();

export function useContacts() {
   return React.useContext(ContactsContext);
}

export function ContactsProvider({ children }) {
   const [contacts, setContacts] = useLocalStorage('contacts', []);

   const createContact = (id, name) => {
      setContacts((prevContacts) => {
         return [...prevContacts, { id, name }];
      });
   };

   return <ContactsContext.Provider value={{ contacts, createContact }}>{children}</ContactsContext.Provider>;
}
