
import Main from "./Component/Layout/Main";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Projects from "./Component/Projects/Projects";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import MainHome from "./Component/Home/MainHome";
import ProjectDetails from "./Component/Details/ProjectDetails";
import Blog from "./Component/Blog/Blog";


const routes = createBrowserRouter([
  {

    path: '/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<MainHome></MainHome>
      },
      {
        path:'/projects',
        element:<Projects></Projects>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path: '/blog',
        element:<Blog></Blog>
      },
      {
        path:'/project/:id',
        element:<ProjectDetails></ProjectDetails>,
        loader:({params})=>fetch(`project${params.id}.json`)
      }
    ]
  }
])

function App() {
 
  return (
    <div >
     <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
