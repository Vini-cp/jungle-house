import CareScale from './CareScale'
import '../styles/PlantItem.css'

function getLocalCart() {
  let cart;
  if (localStorage.getItem('cart') === null) {
    cart = [];
  } else {
    cart = JSON.parse(localStorage.getItem('cart'));
  }
  return cart;
}

function saveLocalCart(item) {
  let cart = getLocalCart();
  const index = cart.findIndex(obj => obj.name === item.name);
  if (index >= 0) {
    const element = cart[index];
    element.amount += 1;
    cart.splice(index, 1);
    cart = [...cart, element];
  } else {
    cart.push(item);
  }
  localStorage.setItem('cart', JSON.stringify(cart));
}

function mouseEnter(e) {
  if ( document.getElementById(e.target.id) !== null ) {
    document.getElementById(e.target.id).classList.add('image-hover');
  }
  if (document.getElementById(`text-${e.target.id}`) !== null) {
    document.getElementById(`text-${e.target.id}`).style.display = "block"
  }
}

function mouseOut(e) {
  if (e.target.id !== `text-${e.target.id}`) {
    if ( document.getElementById(e.target.id) !== null && document.getElementById(e.target.id).classList.contains('image-hover') ) {
      document.getElementById(e.target.id).classList.remove('image-hover');
    }
    if (document.getElementById(`text-${e.target.id}`) !== null) {
      document.getElementById(`text-${e.target.id}`).style.display = "none"
    }
  }
}

function PlantItem(props) {
  const {id, cover, name, water, light, price, cart, updateCart} = props

  function addToCart() {
    const index = cart.findIndex(obj => obj.name === name);
    if (index >= 0) {
      const element = cart[index];
      element.amount += 1;
      cart.splice(index, 1);
      saveLocalCart(element);
      updateCart([...cart, element]);
    } else {
      saveLocalCart({name, price, amount: 1});
      updateCart([...cart, {name, price, amount: 1}]);
    }
  }
  
  return (
      <div>
          <li className='jh-plant-item' key={id} >
            <div className="container" onMouseEnter={mouseEnter} onMouseOut={mouseOut} onClick={addToCart}>
              <img className='jh-plant-item-cover' id={`${name}`} src={cover} alt={`${name} cover`} />
              <div className='middle' id={`text-${name}`}>Add to Cart</div>
            </div>
            {name} - {price}€
            <div>
              <CareScale careType='water' scaleValue={water} />
              <CareScale careType='light' scaleValue={light} />
            </div>
          </li>
      </div>
  )
}

export default PlantItem
