import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import {WelcomePage} from "../../components/welcome-page/WelcomePage";
import {Page} from "../../components/page/Page";
import {ROUTES} from "./constants";
import {PAGES} from "../pages/pages";
import {EndPage} from "../../components/end-page/EndPage";

const router = createHashRouter([
  {
    path: ROUTES.welcomePage,
    element: <WelcomePage/>,
  },
  {
    path: ROUTES.page1,
    element: <Page {...PAGES.page1} />
  },
  {
    path: ROUTES.page2,
    element: <Page {...PAGES.page2} />
  },
  {
    path: ROUTES.page3,
    element: <Page {...PAGES.page3} />
  },
  {
    path: ROUTES.page4,
    element: <Page {...PAGES.page4} />
  },
  {
    path: ROUTES.page5,
    element: <Page {...PAGES.page5} />
  },
  {
    path: ROUTES.page6,
    element: <Page {...PAGES.page6} />
  },
  {
    path: ROUTES.page7,
    element: <Page {...PAGES.page7} />
  },
  {
    path: ROUTES.page8,
    element: <Page {...PAGES.page8} />
  },
  {
    path: ROUTES.page9,
    element: <Page {...PAGES.page9} />
  },
  {
    path: ROUTES.page10,
    element: <Page {...PAGES.page10} />
  },
  {
    path: ROUTES.page11,
    element: <Page {...PAGES.page11} />
  },
  {
    path: ROUTES.page12,
    element: <Page {...PAGES.page12} />
  },
  {
    path: ROUTES.page13,
    element: <Page {...PAGES.page13} />
  },
  {
    path: ROUTES.endPage,
    element: <EndPage />
  },
])

export const Router = () => (
  <RouterProvider router={router}/>
)
