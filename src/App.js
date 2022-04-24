import React from 'react'
import ReactDOM from 'react-dom'
import SearchParams from './components/SearchParams'
import Details from './routes/Details'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>Adopt Me!</h1>
        <Routes>
          <Route path='/details/:id' element={<Details />} />
          <Route path='/' element={<SearchParams />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render(React.createElement(App), document.getElementById('root'))
