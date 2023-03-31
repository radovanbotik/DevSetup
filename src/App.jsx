import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout, { action as rootAction, loader as rootLoader } from "./RootLayout";
import Error from "./Error";
import Index from "./views/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    action: rootAction,
    loader: rootLoader,
    errorElement: <Error />,
    children: [
      {
        errorElement: <Error />,
        children: [{ index: true, element: <Index /> }],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
