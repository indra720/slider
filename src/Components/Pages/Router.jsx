import { createBrowserRouter } from "react-router-dom";
import App from '../../App'

import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Login from "./Login";
import Carousel from "./Carousel";
import FetchGet from "./FetchGet";
import FetchPost from "./FetchPost";
// import Axios from "./Axios";
import Axios2 from "./Axios2";

export const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
       {
         path:'',
         element:<Home/>
       },
      {
        path:'about',
        element:<About/>
      },
       {
         path:'service',
         element:<Service/>
       },
        {
         path:'contact',
         element:<Contact/>
       },
        {
         path:'login',
         element:<Login/>
       },
       {
         path:'crousel',
         element:<Carousel/>
       },
       {
         path:'fetchApi',
         element:<FetchGet/>
       },
        {
         path:'fetchpost',
         element:<FetchPost/>
       },
      //  {
      //    path:'axios',
      //    element:<Axios/>
      //  },
       {
         path:'axios2',
         element:<Axios2/>
       },
    ]
  }
])