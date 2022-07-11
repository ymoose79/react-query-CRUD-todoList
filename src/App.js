import React from "react";
import { QueryClient, QueryClientProvider } from 'react-query'
import Home from "./components/Home";
import Title from "./components/Title";


const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Title />
      <Home />
    </QueryClientProvider>
  )
}

export default App;
