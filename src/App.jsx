// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import React, { Suspense } from 'react';
import Header from './components/Header/Header';

// Lazy-loaded Footer component
const Footer = React.lazy(() => import('./components/Footer'));

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Header /> {/* Displays the developer's name and navigation menu */}
      <Outlet /> {/* Displays the content of the current page */}
      <Suspense fallback={<div style={{ height: '100px', backgroundColor: '#f8f9fa' }}>Loading footer...</div>}>
        <Footer />
      </Suspense> {/* Displays links to the developer's profiles */}
    </>
  );
}

export default App;
