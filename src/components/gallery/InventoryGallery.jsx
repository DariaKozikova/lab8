import InventoryCard from './InventoryCard';

const InventoryGallery = ({
  items,
  loading,
  error,
  onSelect,
  onFav,
  isFavorite
}) => {
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="adaptive-grid">
      {loading ? (
        [1,2,3,4].map(n => (
          <div key={n} className="skeleton-card" />
        ))
      ) : items.length === 0 ? (
        <p>Немає товарів</p>
      ) : (
        items.map(item => (
          <InventoryCard
            key={item.id}
            item={item}
            isFav={isFavorite(item.id)}
            onFav={onFav}
            onClick={() => onSelect(item)}
          />
        ))
      )}
    </div>
  );
};

export default InventoryGallery;