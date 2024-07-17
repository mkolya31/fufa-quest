import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import {WelcomePage} from "../../pages/welcome-page/WelcomePage";
import {Page} from "../../components/page/Page";

const router = createHashRouter([
  {
    path: '/',
    element: <WelcomePage/>,
  },
  {
    path: '/first',
    element: <Page/>
  }
])

export const Router = () => (
  <RouterProvider router={router}/>
)
