import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const baseUrl = import.meta.env.VITE_SERVER_API_TEST;

const httpLink = createHttpLink({
  uri: `${baseUrl}/graphql`
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});