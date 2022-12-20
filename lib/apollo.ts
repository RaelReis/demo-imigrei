import { ApolloClient, InMemoryCache } from "@apollo/client";

const endpoint = process.env.GRAPHQL_API || "";

export const client = new ApolloClient({
  uri: endpoint,
  headers: {
    authorization: `Bearer ${process.env.GRAPHQL_TOKEN}`,
  },
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          organization: {
            read: (existing) => {
              if (existing) {
                return existing;
              }
              // DO MORE STUFF
              return;
            },
          },
        },
      },
    },
  }),
});
