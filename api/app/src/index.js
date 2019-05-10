import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import 'materialize-css/dist/css/materialize.min.css'


const client = new ApolloClient({
  uri: "http://localhost:8000/graphql",
  headers: {
    authorization: `jwt ${localStorage.getItem('token')}`,
  }
});

ReactDOM.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
    document.getElementById('root'));

export default client
