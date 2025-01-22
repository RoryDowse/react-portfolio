import ReactDOM from 'react-dom/client';
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';
import './App.css';

import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';
getCLS(console.log); // Logs Cumulative Layout Shift (CLS)
getFID(console.log); // Logs First Input Delay (FID)
getFCP(console.log); // Logs First Contentful Paint (FCP)
getLCP(console.log); // Logs Largest Contentful Paint (LCP)
getTTFB(console.log); // Logs Time to First Byte (TTFB)

// Bringing in the pages the router will use to conditionally show the appropriate views
import App from './App';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Videos from './pages/Videos';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about-me',
        element: <AboutMe />,
      },
      {
        path: 'portfolio',
        element: <Portfolio />,
      },
      {
        path: 'videos',
        element: <Videos />,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
      {
        path: 'blog/:slug',
        element: <BlogPost />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'resume',
        element: <Resume />,
      }
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
