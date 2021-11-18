import Navbar from './components/navbar/Navbar';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import TimeUntil from './components/timeuntil/TimeUntil';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">

        <header>
          <Navbar/>
          
        </header>
        <article>
        <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/timeuntil" exact element={<TimeUntil/>} />              
          </Routes>
        </article>
    </div>
  );
}

export default App;
