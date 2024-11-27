import { RouterProvider, createBrowserRouter } from "react-router";
import {
  AddOns,
  Home,
  ParsonalInfo,
  Plan,
  Summary,
  ThankYou,
} from "./pages/index";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/ParsonalInfo",
          element: <ParsonalInfo />,
        },
        {
          path: "/Plan",
          element: <Plan />,
        },
        {
          path: "/AddOns",
          element: <AddOns />,
        },
        {
          path: "/Summary",
          element: <Summary />,
        },
        {
          path: "/ThankYou",
          element: <ThankYou />,
        },
      ],
    },
  ]);

  return (
    <div className="w-screen h-screen sm:flex sm:justify-center sm:items-center bg-color-Light-blue">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
