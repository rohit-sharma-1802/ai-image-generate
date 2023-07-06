import React from 'react';
import { BrowserRouter, Link, Routes, Route} from 'react-router-dom';
import {logo} from './assets';
import { Home, CreatePost,About } from './pages';

const App = () => {
    return (
      <BrowserRouter>
        <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e3e3e3]">
          <Link to="/">
            <img src={logo} alt="ai image generation" className="w-20 object-contain"/>
          </Link>
          <div className="flex gap-10 items-center">
            <Link to="/about" className="font-inter rounded-md font-medium border-2 border-[#030303] shadow-lg px-2 py-1 hover:bg-[#fff] hover:text-[#2e548e] hover:border-2 hover:ease-in hover:duration-200 hover:border-[#2e548e]">About</Link>
            <Link to="/create-post" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md shadow-lg">Create</Link>
          </div>
        </header>
        <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/create-post" element={<CreatePost />}/>
            <Route path="/about" element={<About />}/>
          </Routes>
        </main>
        <footer className="flex justify-between bg-[#b3b3b3] py-3 px-11">
        <p>All Rights Reserved | &copy; 2023</p>
          <p>Developed & Managed By <a href="https://rohit-224ca050.netlify.app" target="blank" className="text-[#031053] font-medium">Rohit Sharma</a></p>
        </footer>
      </BrowserRouter>
    )
}

export default App