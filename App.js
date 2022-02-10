import { StatusBar } from 'expo-status-bar';
import Navigation from './navigation/Navigation';
import AppLoading from 'expo-app-loading';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold, 
  useFonts
} from '@expo-google-fonts/poppins';

const TOKEN = process.env.TOKEN;

const httpLink = createHttpLink({
  uri: 'https://chat.thewidlarzgroup.com/api/graphql',
});

const authLink = setContext((_, { headers }) => {
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
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <ApolloProvider client={client}>
      <Navigation />
      <StatusBar style="auto"/>
    </ApolloProvider>
  );
}