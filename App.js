import { StatusBar } from 'expo-status-bar';
import Navigation from './navigation/Navigation';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
// import { TOKEN } from '@env';

const TOKEN = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJjaGF0bHkiLCJleHAiOjE2NDU1MjQxOTYsImlhdCI6MTY0MzEwNDk5NiwiaXNzIjoiY2hhdGx5IiwianRpIjoiZjFiYjBhOTEtZTg1ZC00YjlhLWE4N2YtMDA2Yjg2NTJmZjU1IiwibmJmIjoxNjQzMTA0OTk1LCJzdWIiOiIzNTdlNjRhNy0yZDJkLTQ2NjgtOGE1NC05MWIwZmJkOWQxZTUiLCJ0eXAiOiJhY2Nlc3MifQ.gm3fJFMcUZjv_WtCTFytdgYT83y0Gkm3T49j3tYE1vQPlSPdT-f3kKttX7sl92CFEfT69HeDnGLwG5VOdrm7Ew';

const httpLink = createHttpLink({
  uri: 'https://chat.thewidlarzgroup.com/api/graphql',
});

const authLink = setContext((_, { headers }) => {
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: TOKEN ? `Bearer ${TOKEN}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Navigation />
      <StatusBar />
    </ApolloProvider>
  );
}