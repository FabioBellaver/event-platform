import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
    uri: 'https://api-us-west-2.graphcms.com/v2/cl4o16jns020n01xr2szd9v06/master',
    cache: new InMemoryCache(),
})