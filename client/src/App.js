import './App.css';
import React, {useState, useEffect} from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; 
import axios from 'axios';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Login from './components/Login';
import Signup from './components/Signup';
import Menu from './components/Menu';
import Category from './components/Category';
import Item from './components/Item';
import Cart from './components/Cart';
import Main from './components/Main';
import Account from './components/Account';

function App() {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    async function getAllMenu() {
      await axios.get(`/api/categories`)
        .then(data => {
          setCategories(data.data);
        });

      await axios.get(`/api/products`)
        .then(data => {
          setItems(data.data);
        });
    }

    getAllMenu();
  }, []);

  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/menu" element={<Menu/>} />
        {categories.map((category) => {
          let link = `/menu/${category.uuid}`;
          return <Route exact path={link} key={category.uuid} element={<Category token={token} />}/>
        })}
        {items.map((item) => {
          let link = `/menu/item/${item.uuid}`;

          return <Route exact path={link} key={item.uuid} element={<Item token={token}/>}/>
        })}
        <Route exact path="/me" element={token ? <Account token={token} /> : <Login setToken={setToken} />} />
        <Route exact path="/me/signup" element={token ? <Account token={token} /> : <Signup setToken={setToken} />} />
        <Route exact path="/cart" element={token ? <Cart token={token} /> : <Login setToken={setToken} />} />
      </Routes>
      <Footer>
        <Nav />
      </Footer>
    </div>
    </Router>
  );
}

export default App;
