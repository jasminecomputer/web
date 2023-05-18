import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MyComponent from './components/Projects';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Router>
            <Routes>
              <Route exact path = '' element= {<Home/>} />
              <Route exact path="/projects" element={<MyComponent/>} />
            </Routes>
          </Router>
      </header>
    </div>
  );
}

export default App;
