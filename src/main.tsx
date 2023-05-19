import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

import Homepage from './pages/Homepage.tsx'
import Searchpage from './pages/Searchpage'
import MyLibraryPage from './pages/MyLibraryPage.tsx'
import Search from './components/Search.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>     
      <div className="flex">
        <Sidebar />
        <div className='relative flex-1 h-screen overflow-y-auto'>        
          <div>
            <Search />                           
          </div>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/search' element={<Searchpage />} />
            <Route path='/library' element={<MyLibraryPage />} />
          </Routes>
        </div>
      </div>
      <div className='absolute bottom-0 w-full'>
        <Footer />
      </div>   
    </BrowserRouter>
  </React.StrictMode>,
)
