        import React from "react";
        import CategoriesSection from "./CategoriesSection";
        import PaginationInfinite from "./PaginationInfinite";

        const MarketPage = () => {
        return (
            <div className="flex flex-col md:flex-row gap-6 p-4 bg-gray-50 min-h-screen">
            <aside className="w-full md:w-1/5 bg-white shadow rounded p-4">
                <CategoriesSection />
            </aside>

            <main className="flex-1">
                <PaginationInfinite />
            </main>
            </div>
        );
        };

        export default MarketPage;

