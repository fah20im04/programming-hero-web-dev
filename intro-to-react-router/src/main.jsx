import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import root from './Components/root/root.jsx';
import Home from './Components/Home/Home.jsx';
import Mobiles from './Components/Mobiles/Mobiles.jsx';
import Laptops from './Components/Laptops/Laptops.jsx';
import Users from './Components/Users/users.jsx';
import Users2 from './Components/Users2/Users2.jsx';
import UserDetails from './Components/UserDetails/UserDetails.jsx';
import Posts from './Posts/Posts.jsx';
import PostDetails from './Components/PostDetails/PostDetails.jsx';

const users2Promise = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json());


const router = createBrowserRouter([
  {
    path: "/",
    Component: root,
    children: [
      { index: true, Component: Home },
      { path: 'mobiles', Component: Mobiles },
      { path: 'Laptops', Component: Laptops },
      {
        path: "/users",
        element: <Users />,
        loader: async () => {
          const res = await fetch("https://jsonplaceholder.typicode.com/users");
          return res.json();
        }
      },
      {
        path: 'Users2',
        element: <Suspense>
          fallback={<span>Loading....</span>}
          <Users2 users2Promise={users2Promise}></Users2>

        </Suspense>
      },
      {
        path: 'users/:userId',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails
      },
      {
        path: 'posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        Component: Posts
      },
      {
        path: 'posts/:postId',
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component: PostDetails
      },
      {
        path:'*',
        element: <h3> Not Found 404 status</h3>
      }

    ]
  },

  {
    path: 'about',
    element: <div>About me here</div>
  },
  {
    path: 'blogs',
    element: 'All my blogs are here'
  },
  {
    path: 'App',
    // element: <App></App>
    Component: App
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
