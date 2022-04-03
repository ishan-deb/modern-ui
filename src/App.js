import './App.css';

import { Blog, Features, Footer, Header, Possibility, WhatGPT3} from './containers'
import { Brand, CTA, Navbar} from './components'

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
    </div>
  );
}

export default App;
