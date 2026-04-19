import { useFavorites } from '../hooks/useFavorites';
import InventoryCard from '../components/gallery/InventoryCard';
import FavoritesBar from '../components/gallery/FavoritesBar';

const Favorites = () => {
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <div className="container">
      <h1>Ваші Улюблені ❤️</h1>

      <FavoritesBar count={favorites.length} />

      <div className="adaptive-grid">
        {favorites.length === 0 ? (
          <p>Тут поки порожньо...</p>
        ) : (
          favorites.map(item => (
            <InventoryCard
              key={item.id}
              item={item}
              isFav={true}
              onFav={toggleFavorite}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Favorites;