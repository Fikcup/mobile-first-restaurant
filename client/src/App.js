import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; 
import Footer from './components/Footer';
import Nav from './components/Nav';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path="/" />
        <Route exact path="/menu" />
        <Route exact path="/me" element={<Login/>}/>
        <Route exact path="/me/signup" element={<Signup/>} />
        <Route exact path="/cart" />
      </Routes>
      <Footer>
        <Nav />
      </Footer>
    </div>
    </Router>
  );
}

export default App;
