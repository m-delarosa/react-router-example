import React from 'react'
import './App.css'
import Nav from './Nav'
import About from './About.js'
import Shop from './Shop.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//As as the switch found the first route it will only render that one. 
// "exact" makes it so only "/" means this and it won't show the homepage instead of the about and shop pages below.


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch> {}
          < Route path="/" exact component={Home} />
          < Route path="/about" component={About} />
          < Route path="/shop" component={Shop} />
        </Switch>
      </div>
    </Router>
  )
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)

export default App
