import {RouterProvider, createBrowserRouter} from 'react-router-dom'

import NavPage from './pages/NavPage';
import UserPage,{loader as userLoader} from './pages/UserPage';
import NotFoundPage from './pages/NotFoundPage';
import Profile, { loader as loaderID } from './components/Profile';
import ErrorPage from './components/ErrorPage';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUs';
function App() {
  const router= createBrowserRouter([
    {
      path:'/',
      errorElement:<ErrorPage/>,
      element:<NavPage/>,
      children:[
        {
          index:true,
          element:<HomePage/>
        },
        {
          path:'/users',
          errorElement:<ErrorPage/>,
          loader:userLoader,
          element:<UserPage/>,
          children:[
            {
              index:true,
              element:<h1>User info</h1>
            },
            {
              path:':id',
              errorElement:<ErrorPage/>,
              loader:loaderID,
              element:<Profile/>
            }
          ]
        },
        {
          path:'/about',
          element:<AboutUsPage/>
        },
        {
          path:'*',
          element:<NotFoundPage/>
        }
      ]
    },
  ])
  return (<RouterProvider router={router}/>)
}

export default App
