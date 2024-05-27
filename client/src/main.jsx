import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Page/HomePage.jsx';
import ProfilePage from './Page/Profile.jsx';
import ErrorPage from './Page/ErrorPage.jsx';
import SingleGame from './Page/ViewSingleGame.jsx';
import SearchResult from './Components/SearchResult/SearchResult.jsx';
import CategoryPage from './Page/CategoryPage.jsx';
import Donate from './Page/Donate.jsx';

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
        path: 'profile',
        element: <ProfilePage />,
      },
      {
        path: 'search',
        element: <SearchResult />,
      },
      {
        path: 'game/:game_id',
        element: <SingleGame />,
      },
      {
        path: 'category/:categoryName',
        element: <CategoryPage />,
      },
      {
        path: 'donate',
        element: <Donate />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
);
