import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Bookmarks from "./pages/Bookmarks.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Movie from "./pages/Movie.jsx";
import SignUp from "./pages/SignUp.jsx";
import Tv from "./pages/Tv.jsx";
import SearchMedia from "./pages/SearchMedia.jsx";
import MovieDetail from "./pages/MovieDetail.jsx";
import TvDetail from "./pages/TvDetail.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/search/:mediaType/:searchQuery",
            element: <SearchMedia />,
          },
        ],
      },
      {
        path: "/movie",
        children: [
          {
            path: "/movie",
            element: <Movie />,
          },
          {
            path: "/movie/search/:mediaType/:searchQuery",
            element: <SearchMedia />,
          },
        ],
      },
      {
        path: "/tv",
        children: [
          {
            path: "/tv",
            element: <Tv />,
          },
          {
            path: "/tv/search/:mediaType/:searchQuery",
            element: <SearchMedia />,
          },
        ],
      },
      {
        path: "/bookmarks",
        children: [
          {
            path: "/bookmarks",
            element: <Bookmarks />,
          },
          {
            path: "/bookmarks/search/:mediaType/:?searchQuery",
            element: <SearchMedia />,
          },
        ],
      },
    ],
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/movie/:mediaId",
    element: <MovieDetail />,
  },
  {
    path: "/tv/:mediaId",
    element: <TvDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
