import { createBrowserRouter ,RouterProvider} from 'react-router-dom';
import styles from './App.module.css'
import HomePage from './components/Home/Homepage';
import Root from './components/Root/Root';
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Everything from './components/Everything/Everything';

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage/>,
      children:[
        {index: true,element:<HomePage/>},
        {path:"/about",element:<div>About</div>},
        {path:"/everything",element:<Everything/>},
        {path:"/groceries",element:<div>Groceries</div>},
        {path:"/juice",element:<div>Juice</div>},
        {path:"/contact",element:<div>Contact</div>}
      ]
    },
    {
      path: "*",
      element: <ErrorPage />
    }
  ]);

  return(
    <section className={styles.main}>
      <RouterProvider router={router} />
    </section>
  )
}
