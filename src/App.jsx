import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import { Provider } from 'react-redux';
import Cart from './pages/Cart.jsx';
import Home from './pages/Home.jsx';
import Navbar from './components/Navbar';
import store from './store/store';

function App() {

  return (
    <>
      <Provider store = {store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
