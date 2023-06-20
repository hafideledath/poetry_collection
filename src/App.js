import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Submit from './Submit';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (

    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/submit" Component={Submit} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
