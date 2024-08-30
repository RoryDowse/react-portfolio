import React from 'react';
// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Header /> {/* Displays the developer's name and navigation menu */}
      <Outlet /> {/* Displays the content of the current page */}
      <Footer /> {/* Displays links to the developer's profiles */}
    </>
  );
}

export default App;
