import PlantItem from './PlantItem'
import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'

function ShoppingList(props) {
  const { cart, updateCart, plants } = props
  return (
		<div className="jh-shopping-list">
			<ul className='jh-plant-list'>
				{plantList.map(({ id, name, cover, light, water, category, price } ) => (
          <div key={id}>
            {plants !== "" && plants !== "default" ? (
              <div>
                {plants === category ? (
                  <div> 
                    <PlantItem id={id} name={name} cover={cover} light={light} water={water} price={price} cart={cart} updateCart={updateCart} />
                  </div>
                ) : null}
              </div>
              ) : (
              <div> 
                <PlantItem id={id} name={name} cover={cover} light={light} water={water} price={price} cart={cart} updateCart={updateCart}/>
              </div>
            )}
          </div>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList
