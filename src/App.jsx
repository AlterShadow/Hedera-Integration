import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AppRootLayout from "./pages/AppRoot";
import Dashboard from "./pages/Dashboard";
import Markets from "./pages/Markets";
import Vote from "./pages/Vote";
import HomeRootLayout from "./pages/HomeRoot";
import HomePage from "./pages/HomePage";
import { ModalContextProvider } from "./util/modalContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "/app",
        element: <AppRootLayout />,
        children: [
          { index: true, element: <Dashboard /> },
          { path: "markets", element: <Markets /> },
          { path: "vote", element: <Vote /> },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <ModalContextProvider>
        <RouterProvider router={router} />
      </ModalContextProvider>
    </>
  );
}

export default App;
