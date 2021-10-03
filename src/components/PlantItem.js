import CareScale from './CareScale'
import '../styles/PlantItem.css'

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
      updateCart([...cart, element]);
    } else {
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
