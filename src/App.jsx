import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import AppLayout from './ui/AppLayout';
import Error from './ui/Error';
import Dashboard from './pages/Dashboard';
import Messages from './pages/Messages';
import Memebers from './pages/Memebers';
import Settings from './pages/Settings';
import Tasks from './pages/Tasks';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
      {
        path: '/messages',
        element: <Messages />,
      },
      {
        path: '/members',
        element: <Memebers />,
      },
      {
        path: '/tasks',
        element: <Tasks />,
      },
      {
        path: '/settings',
        element: <Settings />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
