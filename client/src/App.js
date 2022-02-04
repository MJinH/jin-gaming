import {BrowserRouter,Routes,Route} from "react-router-dom"
import {ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Items from "./components/Main"
import Details from "./components/Details"
import './App.css';



const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App d-flex justify-content-center align-items-center">
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Items/>}/>
              <Route path="/product/:name" element={<Details/>}/>
            </Routes>
          </BrowserRouter>
      </div>
    </ApolloProvider>
  );
}

export default App;
