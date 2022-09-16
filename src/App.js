import React from 'react';
import Messanger from './components/Messanger';
import { GoogleOAuthProvider } from '@react-oauth/google';


function App() {

  const clientID = '1048405289966-jqaejqjohs5aenhc2ibgs47ikn8oa4a4.apps.googleusercontent.com'

  return (
   <GoogleOAuthProvider clientId={clientID}>
    <Messanger />
   </GoogleOAuthProvider>
  );
}

export default App;
