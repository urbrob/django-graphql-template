import React from 'react';
import NavbarMenu from './NavbarMenu'
import MainContent from './MainContent'
import Login from './Login'
import LOGIN_USER from "../Schema"
import { Mutation } from 'react-apollo'
import { Footer } from 'react-materialize'

class App extends React.Component{

  render(){
    const footerStyles = {
      position: 'absolute',
      left:0,
      bottom:0,
      right:0,
    };
    return (
        <div>
          <NavbarMenu />
          {localStorage.getItem('token') === null &&
            <Mutation mutation={LOGIN_USER}>
              {(login, { data }) => <Login mutate={login} /> }
            </Mutation>
          }
          {localStorage.getItem('token') !== null &&
            <MainContent  />
          }
          <Footer style={footerStyles} />
        </div>
    )
  }
}

export default App;
