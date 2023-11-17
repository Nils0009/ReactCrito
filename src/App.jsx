import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import News from './views/News'
import Contact from './views/Contact'
import Service from './views/Service'
import Article from './views/Article'
import ArticleDetail from './components/Main/News/ArticleDetail'
import { ArticleProvider } from './contexts/ArticleContext'

function App() {

return (
  <div className="wrapper">
    <BrowserRouter>
      <ArticleProvider>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/news' element={<News/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/article/:id' element={<Article />} />
          <Route path='/article/:id' element={<ArticleDetail />} />
          <Route path='*' element={<Service/>} />
        </Routes>
      </ArticleProvider>
    </BrowserRouter>
  </div>
  )
}

export default App
