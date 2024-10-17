import {
  createBrowserRouter
} from "react-router-dom";
import App from "./components/App";
import Form1 from "./components/Form1.js";
import Form2 from "./components/Form2.js";
import Form3 from "./components/Form3.js";
import Detail from "./components/Detail.js";

const customRouter = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element:<Form1/>
      },
      {
        path: "/form-2/",
        element:<Form2/>
      },
      {
        path: "/form-3",
        element:<Form3/>
      },
      {
        path: "/details",
        element:<Detail/>
      }
    ]
  }
])

export default customRouter;