import { plantList } from '../datas/plantList'
import '../styles/Categories.css'

function Categories(props) {
  const { plants, updatePlants } = props
  const categories = plantList.map(plant => plant.category);
  const uniqueCategories = categories.filter((item, i, ar) => ar.indexOf(item) === i);

  return (
		<div className="jh-categories">
      <select className="jh-categories-select" name="plants" id="plants" onChange={(e) =>updatePlants(e.target.value)}>
        <option key="default" value="default">Filter a category:</option> &&
        {uniqueCategories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
				))}
      </select>
      <button onClick={() => {
        updatePlants("");
        document.getElementById('plants').value="default";
        }}>
        Reset filter
      </button>
		</div>
	)
}

export default Categories
