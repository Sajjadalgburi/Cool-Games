// apolllo client
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import { setContext } from '@apollo/client/link/context';

import { AuthProvider } from '../context/AuthContext';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// redux provider

import { Provider } from 'react-redux';
import { store } from './state/store';

// react router
import { Outlet } from 'react-router-dom';

// components
import Navigation from './Components/Navbar/Navigation';
import Footer from './Page/Footer';

// app.jsx component
function App() {
  return (
    <AuthProvider>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Navigation />
          <Outlet />
          <Footer />
        </Provider>
      </ApolloProvider>
    </AuthProvider>
  );
}

export default App;
