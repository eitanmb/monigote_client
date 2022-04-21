import './App.css';
import { apolloClient } from './apolloClient';
import { ApolloProvider } from '@apollo/client';
import { HomeScreen } from './components/ui/HomeScreen';



const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
        <HomeScreen />
  </ApolloProvider>
  )    
}

export default App;



 
