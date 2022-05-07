import React from 'react'
import ReactDOM from 'react-dom'
import SearchParams from './components/SearchParams'
import Details from './routes/Details'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to='/'>Adopt Me!</Link>
      </header>
      <Routes>
        <Route path='/details/:id' element={<Details />} />
        <Route path='/' element={<SearchParams />} />
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.render(React.createElement(App), document.getElementById('root'))
