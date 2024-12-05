// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import React, { Suspense } from 'react';
import Header from './components/Header/Header';

// Lazy-loaded Footer component
const Footer = React.lazy(() => import('./components/Footer'));

const isDesktop = window.innerWidth > 1024;

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Header /> {/* Displays the developer's name and navigation menu */}
      <Outlet /> {/* Displays the content of the current page */}
      {!isDesktop ? (
        <Suspense fallback={<div style={{ height: '100px', backgroundColor: '#f8f9fa' }}>Loading footer...</div>}>
          <Footer /> {/* Displays links to the developer's profiles */}
        </Suspense> 
      ) : (
        <Footer />
      )}
    </>
  );
}

export default App;
