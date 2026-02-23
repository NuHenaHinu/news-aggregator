import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewsPage from './components/NewsPage';
import TopHeadline from './components/TopHeadine';
import NewsByCountry from './components/NewsByCountry';

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full'>
        <BrowserRouter>
          <Header />
            <Routes>
              <Route path="/" element={<NewsPage />} />
              <Route path="/top-headlines" element={<TopHeadline />} />
              <Route path="/country/:iso" element={<NewsByCountry />} />
            </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App