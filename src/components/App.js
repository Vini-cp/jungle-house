import { useState } from 'react'
import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import Footer from './Footer'
import Categories from './Categories'
import '../styles/App.css';
import '../styles/Layout.css';

function App() {
  const [cart, updateCart] = useState([])
  const [plants, updatePlants] = useState("")

  return (
    <div>
      <Banner/>
      <div className="jh-layout-inner">
        <Cart cart={cart} updateCart={updateCart}/>
        <Categories plants={plants} updatePlants={updatePlants}/>
        <ShoppingList cart={cart} updateCart={updateCart} plants={plants}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
