import './App.css'
import About from './pages/about'
import Layout from './pages/Layout'
import Home from './pages/home'
import MovieDetails from './pages/movie-details'
import Contact from './pages/contact'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import NotFound from './pages/not-found'
import Favs from './pages/favs'
import { Provider } from "react-redux"
import store from './store/store'
import Profile from './pages/profile'
import Login from './pages/login'
import Register from './pages/register'
import AuthGuard from './guards/auth-guard'

function App() {
  const routes = createBrowserRouter([
    {
      path: "", element: <Layout></Layout>, children: [
        { path: "/", element: <Home /> },
        { path: "About", element: <About></About> },
        { path: "contact", element: <Contact></Contact> },
        { path: "/Movies/:movieId", element: <MovieDetails></MovieDetails> },
        { path: "*", element: <NotFound></NotFound> },
        { path: "profile", element: <Profile /> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register></Register> },
        {
          element: <AuthGuard />,
          children: [{ path: "favs", element: <Favs /> }]
        },
      ]
    }
  ]);
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={routes}></RouterProvider>
      </Provider>
    </>
  )
}

export default App
