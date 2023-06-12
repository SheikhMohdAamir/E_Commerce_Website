import './App.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Store from './Pages/Store/Store'
import ContactUs from './Pages/ContactUs.js/ContactUs';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


  const router=createBrowserRouter([
    {path:'/', element:<Home />},
    {path:'/about', element:<About />},
    {path:'/store', element:<Store />},
    {path:'/contactus', element:<ContactUs />}
  ])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    
    </div>
  );
}

export default App;
