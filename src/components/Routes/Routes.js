import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../Layout/Main";
import Users from "../Users/Users";

export const routes = createBrowserRouter([
 {
    path: '/',
    element:<Main></Main>,
    children: [
        {
            path: "/",
            element: <Home></Home>,
          },
          {
            path: "/users",
            element: <Users></Users>,
            loader: () => fetch('https://reqres.in/api/users?page=1')
          },
    ]
 }
]);
