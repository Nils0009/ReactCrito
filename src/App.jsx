import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import News from './views/News'
import Contact from './views/Contact'
import Article from './views/Article'
import NotFound from './views/NotFound'


function App() {

return (
  <div className="wrapper">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/news' element={<News/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/news/article' element={<Article/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
