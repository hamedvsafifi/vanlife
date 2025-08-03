import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import VansPage from "./pages/VansPage";
import Van from "./features/vans/Van";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/vans" element={<VansPage />} />
      <Route path="/vans/:id" element={<Van />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
