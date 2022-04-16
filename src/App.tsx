import './App.css';
import { apolloClient } from './apolloClient';
import { ApolloProvider } from '@apollo/client';
import { MonigoteControllers } from './components/MonigoteControllers';



const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
        <MonigoteControllers />
  </ApolloProvider>
  )    
}

export default App;



 
