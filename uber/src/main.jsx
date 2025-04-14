import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import Layout1 from './Layouts/Layout1'
import Home from './components/Home'
import Signin from './components/Signin'
import Layout2 from './Layouts/Layout2'
import MapComponent from './components/MapComponent'
import HeaderLeft from './components/HeaderLeft'
import { Provider } from 'react-redux';
import { store } from './components/store'; // Import your Redux store
import Packages from './components/Packages'
import Rentals from './components/Rentals'

const App = () =>{
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<Layout1/>}>
          <Route index element={<Home/>}></Route>
          <Route path='signin' element={<Signin/>}></Route>
        </Route>

        <Route path='/go' element={<Layout2/>}>
          <Route index element={<HeaderLeft />}></Route>
          <Route path='packages' element={<Packages />}></Route>
          <Route path='rentals' element={<Rentals />}></Route>
        </Route>
      </>
    )
  )
  return <RouterProvider router={router} />
}

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
