import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import './index.css'
//layout component
import RootLayout from './layouts/RootLayout'
import HelpLayout from './layouts/HelpLayout'
import CareersLayout from './layouts/CareersLayout'

//pages components
import Home from './components/Home'
import About from './components/About'
import Faq from './components/Faq'
import Contacts, { contactAction } from './components/Contacts'
import NotFound from './components/NotFound'
import Careers, { careersLoader } from './components/Careers'
import CareerDetails, { careerDetaisLoader } from './components/CareerDetails'
import CareerError from './components/CareerError'




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='/about' element={<About />} />

      <Route path='help' element={<HelpLayout />}>
        <Route path='faq' element={<Faq />}></Route>
        <Route path='contact' element={<Contacts />} action={contactAction}></Route>
      </Route>

      <Route path='careers' element={<CareersLayout />} errorElement={<CareerError />}>
        <Route
          index
          element={<Careers />}
          loader={careersLoader}
          // errorElement={<CareerError />}
        />
        <Route
          path=":id"
          element={<CareerDetails />}
          loader={careerDetaisLoader}
        />
      </Route>

      {/* catch all route for error page */}
      <Route path='*' element={<NotFound />}></Route>
    </Route>
  )
)
function App() {

  return (

    <RouterProvider router={router} />
    // <BrowserRouter>
    // <header>
    //   <nav>
    //     <h1>Jobarouter</h1>
    //     <NavLink to="/">Home</NavLink>
    //     <NavLink to="/about">About</NavLink>
    //   </nav>
    // </header>
    // <main>
    //   <Routes>
    //     <Route index element={<Home/>}></Route>
    //     {/* <Route path='/' element={<Home/>}></Route> */}
    //     <Route path='/about' element={<About/>}></Route>
    //   </Routes>
    //   </main>
    // </BrowserRouter>
  )
}

export default App
