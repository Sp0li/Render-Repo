import React from 'react';
import './App.css';
import BusinessCard from './components/BusinessCard';

// Import contacts from JSON file
import contacts from './data/contacts.json';

function App() {
  return (
    <div className="app">
      <br />
        <div className="flex-box">
        { contacts.map((contact, index) => (
          <BusinessCard key={index} contact={contact} />
        )) }
        </div>
    </div>
  );
}

export default App;
