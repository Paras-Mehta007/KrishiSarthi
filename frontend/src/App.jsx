import { Outlet, useLocation } from 'react-router-dom'
import Header from './components/Header/Header'
import UserContext from './contexts/UserContext';
import Footer from './components/Footer/Footer';

export default function App() {
  const location = useLocation();

  // paths where header should be hidden
  const hideHeaderPaths = ['/login', '/signup']; 
  const shouldShowHeader = !hideHeaderPaths.includes(location.pathname);

  // paths where footer should be hidden
  const hideFooterPaths = ['/login', '/signup']; 
  const shouldShowFooter = !hideFooterPaths.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {shouldShowHeader && <Header />}
      
      <UserContext>
        {/* Main content grows to push footer down */}
        <main className="flex-grow">
          <Outlet />
        </main>
      </UserContext>

      {shouldShowFooter && <Footer />}
    </div>
  );
}
