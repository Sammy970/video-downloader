import "./App.css";
import Facebook from "./pages/Facebook";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/fb", element: <Facebook /> },
      { path: "/insta", element: <Facebook /> },
      { path: "/youtube", element: <Facebook /> },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
