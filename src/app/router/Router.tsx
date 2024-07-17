import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import {WelcomePage} from "../../pages/welcome-page/WelcomePage";
import {Page} from "../../components/page/Page";
import {ROUTES} from "./constants";

const router = createHashRouter([
  {
    path: ROUTES.welcomePage,
    element: <WelcomePage/>,
  },
  {
    path: ROUTES.first,
    element: <Page/>
  }
])

export const Router = () => (
  <RouterProvider router={router}/>
)
