import Login from "src/pages/login";

export const routes = [
  {
    path: "/",
    element: "",
    children: [
      {
        index: true,
        element: <Login />,
      },
    ],
  },
];
