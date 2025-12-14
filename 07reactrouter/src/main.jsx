import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import Layout from './Layout.jsx'
import Contact from './Components/Contact/Contact.jsx'
import About from './Components/About/About.jsx'
import User from './Components/User/User.jsx'
import Github, { githubloaderinfo } from './Components/Github/Github.jsx'
const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element= {<Layout />}>
        <Route path='' element= {<Home />} />
        <Route path='about' element = {<About />} />
        <Route path='contact' element = {<Contact />} />
        <Route path='user/:id' element = {<User />} />
        <Route loader= {githubloaderinfo} path='github' element = {<Github />} />
      </Route>
    )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
