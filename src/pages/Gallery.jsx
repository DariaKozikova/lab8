import { useEffect, useState } from 'react';
import { inventoryApi } from '../services/inventoryApi';
import InventoryGallery from '../components/gallery/InventoryGallery';
import InventoryQuickView from '../components/gallery/InventoryQuickView';
import { useFavorites } from '../hooks/useFavorites';

const Gallery = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState(null);

  const { toggleFavorite, isFavorite } = useFavorites();

  useEffect(() => {
    inventoryApi.getAll()
      .then(res => {
        setItems(res.data);
        setError(null);
      })
      .catch(() => {
        setError("Не вдалося завантажити товари");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="container">
      <h1>Галерея товарів</h1>

      <InventoryGallery
        items={items}
        loading={loading}
        error={error}
        onSelect={setSelected}
        onFav={toggleFavorite}
        isFavorite={isFavorite}
      />

      <InventoryQuickView
        item={selected}
        onClose={() => setSelected(null)}
      />
    </div>
  );
};

export default Gallery;