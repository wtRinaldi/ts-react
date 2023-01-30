import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import HomePage from "./pages/Home";
import UsersPage from "./pages/Users";
import MealsPage from "./pages/Meals";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/users", element: <UsersPage /> },
  { path: "/meals", element: <MealsPage /> },
]);

function App() {
  return (
    <div className="App bg-slate-50 h-screen flex">
      <Navigation />
      <div className="container mx-auto bg-white">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
