import { useState } from 'react'
import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import Footer from './Footer'
import Categories from './Categories'
import '../styles/App.css';
import '../styles/Layout.css';

function getLocalCart() {
  let cart;
  if (localStorage.getItem('cart') === null) {
    cart = [];
  } else {
    cart = JSON.parse(localStorage.getItem('cart'));
  }
  return cart;
}

// function removeItemCart(item) {
//   let cart = getLocalCart();
//   const itemIndex = cart.indexOf(item);
//   cart.splice(itemIndex, 1);
//   localStorage.setItem('cart', JSON.stringify(cart));
// }

function App() {
  const cartLocal = getLocalCart();
  const [cart, updateCart] = useState(cartLocal)
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
