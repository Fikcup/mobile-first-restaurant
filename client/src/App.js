import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'; 
import Footer from './components/Footer';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
    <div className="App">
      <Footer>
        <Nav />
      </Footer>
    </div>
    </Router>
  );
}

export default App;
