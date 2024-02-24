import Home from "./Home.jsx"
import {createMemoryRouter, RouterProvider} from "react-router-dom";
const myRouter = createMemoryRouter([
  {
    path: "/",
    element: <Home />,
  },
])
export default function App() {
  return (<RouterProvider router={myRouter} />)
}
