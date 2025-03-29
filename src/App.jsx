import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import MainHeader from "./components/MainHeader";
import ShopPage from "./pages/ShopPage";
import MainFooter from "./components/MainFooter";


export default function App() {
  return (
    <div className="App">
      <MainHeader />
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="shop">
            <Route index element={<ShopPage />} />
            <Route path="/shop/:productId" element={<h1>Product Details</h1>} />
          </Route>
          <Route path="*" element={<h1>Error 404 || Page Not Found</h1>} />
        </Route>
      </Routes>
      <MainFooter />
    </div>
  );
}
