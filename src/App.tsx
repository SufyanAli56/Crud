import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/saga-blue/theme.css'; // theme
import 'primereact/resources/primereact.min.css'; // core css
import 'primeicons/primeicons.css'; // icons
import './App.css';

// Create the router instance
const router = createRouter({ routeTree });

// Register the router for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <PrimeReactProvider>
      <RouterProvider router={router} />
    </PrimeReactProvider>
  );
}

export default App;