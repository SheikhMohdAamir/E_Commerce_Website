import './App.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Store from './Pages/Store/Store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


  const router=createBrowserRouter([
    {path:'/', element:<Home />},
    {path:'/about', element:<About />},
    {path:'/store', element:<Store />}
  ])

function App() {
  return (
    <div>
      <RouterProvider router={router} >
      <Home />
      </RouterProvider>
    </div>
  );
}

export default App;
