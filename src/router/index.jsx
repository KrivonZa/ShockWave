import Home from "../component/mainPage/Home";
import { Homepage, Intro} from "../componentPage/Home";
import { NotFound, Error } from "../componentPage/secondaryComponent";
import { Login, Register } from "../componentPage/Account";
import '../index.css';

export const router = [
  {
    element: <Home />,
    path: "/home",
    children: [
      {
        element: <Homepage />,
        index: true,
      }
    ]
  },
  {
    element: <Intro />,
    path: "/",
  },
  {
    element: <NotFound />,
    path: "/*",
  },
  {
    element: <Error />,
    path: "/500",
  },
  {
    element: <Login />,
    path: "/login",
  },
  {
    element: <Register />,
    path: "/register", 
  },
];
