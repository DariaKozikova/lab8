import { Heart } from 'lucide-react';
const InventoryCard = ({ item, onClick, onFav, isFav }) => (
  <div className="grid-card" onClick={onClick}>
    <img src={item.photo} alt="inventory" />
    <div className="card-info">
      <h3>{item.inventory_name}</h3>
      <button className="heart-btn" onClick={(e) => { e.stopPropagation(); onFav(item); }}>
        <Heart fill={isFav ? "red" : "none"} color={isFav ? "red" : "#333"} />
      </button>
    </div>
  </div>
);
export default InventoryCard;