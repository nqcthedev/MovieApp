import DetailMoviePage from "@/pages/DetailMoviePage"
import HomePage from "@/pages/HomePage"
import LoginPage from "@/pages/LoginPage"
import ProfilePage from "@/pages/ProfilePage";
import RegisterPage from "@/pages/RegisterPage";
import routes from "../config/routes";
export const route = [
  {
    path: routes.home,
    element: HomePage,
  },
  {
    path: routes.login,
    element: LoginPage,
  },
  {
    path: routes.register,
    element: RegisterPage,
  },
  {
    path: routes.profile,
    element: ProfilePage,
  },
  {
    path: routes.detailMovie,
    element: DetailMoviePage,
  },
];