import Navbar from './components/navbar/Navbar';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Tweets from './components/tweets/Tweets';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">

        <header>
          <Navbar/>
          <Routes>
            <Route path="/" exact component={<Home/>} />
            <Route path="/tweets" exact component={<Tweets/>} />
            <Route path="/github" exact component={ () =>
              window.location.href = "github.com"
            } />
          </Routes>
        </header>
        <body>
        
        </body>
    </div>
  );
}

export default App;
