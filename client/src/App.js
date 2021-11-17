import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; 
import Footer from './components/Footer';
import Nav from './components/Nav';
import Login from './components/Login';
import Signup from './components/Signup';
import Menu from './components/Menu';
import Category from './components/Category';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path="/" />
        <Route exact path="/menu" element={<Menu/>} />
        <Route exact path="/menu/683f1574-4104-11ec-973a-0242ac130003" element={<Category/>}/>
        <Route exact path="/me" element={<Login/>} />
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
