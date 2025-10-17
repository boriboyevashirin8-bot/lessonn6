import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./components/Header";
import CategoriesSection from "./components/CategoriesSection";
import PaginationInfinite from "./components/PaginationInfinite";

const queryClient = new QueryClient();

const App = () => {
  return (
    <div>
      <Header />
      <CategoriesSection />

      <QueryClientProvider client={queryClient}>
        <PaginationInfinite />
      </QueryClientProvider>
    </div>
  );
};

export default App;

