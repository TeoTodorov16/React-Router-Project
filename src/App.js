import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";

const notesa = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  {},
  {},
  {},
]);

function App() {
  return <RouterProvider router={notesa} />;
}

export default App;
