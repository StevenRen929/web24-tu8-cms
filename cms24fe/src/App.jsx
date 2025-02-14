import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ArticlesPage from './components/pages/ArticlesPage'
import ArticlePage from './components/pages/ArticlePage'
import NewArticle from './components/NewArticle'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {


  return (
    <Router>
      <Routes>
        {/* Define routes for your pages */}
        <Route path="/" element={<ArticlesPage />} /> {/* Route for articles list */}
        <Route path="/articles/:id" element={<ArticlePage />} /> {/* Route for individual article page */}
         <Route path = "/creatArticle" element={<NewArticle></NewArticle>}></Route>
      </Routes>
    </Router>
  )
}

export default App
