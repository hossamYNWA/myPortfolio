import Home from "./Home.jsx"
import {createBrowserRouter, RouterProvider} from "react-router-dom";
const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
])
export default function App() {
  return (<RouterProvider router={myRouter} />)
}
