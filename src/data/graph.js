const { createApolloFetch } = require("apollo-fetch");

/** 
 * Creates an apollo fetch with a valid graphql server url.
*/
const uri = "https://graphql.cimri.com/";
const apolloFetch = createApolloFetch({ uri });

module.exports = apolloFetch;
