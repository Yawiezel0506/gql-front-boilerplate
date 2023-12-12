import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { client } from "./apollo";
import Layout from "./pages/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <ApolloProvider client={client}>
          <Routes>
            <Route path="/" element={<Layout />} />
          </Routes>
        </ApolloProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
