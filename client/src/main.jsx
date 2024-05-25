import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Page/HomePage.jsx';
import ProfilePage from './Page/Profile.jsx';
import ErrorPage from './Page/ErrorPage.jsx';
import ViewSingleGame from './Page/ViewGame.jsx';
import SearchedGamesResult from './Components/SearchedGamesResult/index.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/profile',
        element: <ProfilePage />,
      },
      {
        path: '/search',
        element: <SearchedGamesResult />,
      },
      {
        path: '/game/:id',
        element: <ViewSingleGame />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
);
