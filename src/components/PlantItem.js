import CareScale from './CareScale'
import '../styles/PlantItem.css'

function handleClick(plantName) {
	alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
}

function PlantItem(props) {
  const {id, cover, name, water, light} = props
  return (
      <div>
          <li className='jh-plant-item' key={id} onClick={() => handleClick(name)}>
            <div className="Container">
              <img className='jh-plant-item-cover' src={cover} alt={`${name} cover`} />
            </div>
            {name}
            <div>
              <CareScale careType='water' scaleValue={water} />
              <CareScale careType='light' scaleValue={light} />
            </div>
          </li>
      </div>
  )
}

export default PlantItem
