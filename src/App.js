import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Login, Dashboard } from './components/index';
import './scss/index.scss';
import useLocalStorage from './hooks/useLocalStorage';
import { ContactsProvider } from './contexts/ContactsProvider';

function App() {
   const [id, setId] = useLocalStorage('id');

   const dashboard = (
      <ContactsProvider>
         <Dashboard id={id} />
      </ContactsProvider>
   );

   return id ? dashboard : <Login onIdSubmit={setId} />;
}

export default App;
