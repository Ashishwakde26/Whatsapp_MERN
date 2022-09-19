import React from 'react';
import Messanger from './components/Messanger';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Accountprovider from './context/Accountprovider';


function App() {

  const clientID = '1048405289966-jqaejqjohs5aenhc2ibgs47ikn8oa4a4.apps.googleusercontent.com'

  return (
   <GoogleOAuthProvider clientId={clientID}>
    <Accountprovider>
    <Messanger />
    </Accountprovider>
   </GoogleOAuthProvider>

  );
}

export default App;
