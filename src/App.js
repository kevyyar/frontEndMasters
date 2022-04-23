import React from 'react'
import ReactDOM from 'react-dom'
import Pet from './Pet'

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Figo" animal="Dog" breed="Shi Tzu" />
    </div>
  )
}

ReactDOM.render(React.createElement(App), document.getElementById('root'))
