import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./components/Header";
import MarketPage from "./components/MarketPage";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <MarketPage />
    </QueryClientProvider>
  );
};

export default App;

