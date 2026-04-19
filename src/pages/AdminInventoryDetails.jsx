import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { inventoryApi } from '../services/inventoryApi';
import InventoryDetails from '../components/inventory/InventoryDetails';

const AdminInventoryDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    inventoryApi.getById(id)
      .then(res => {
        setItem(res.data);
        setError(null);
      })
      .catch(() => {
        setError("Не вдалося завантажити товар");
      });
  }, [id]);

  if (error) return <p className="error">{error}</p>;
  if (!item) return <p>Завантаження...</p>;

  return (
    <div className="container">
      <InventoryDetails item={item} />
    </div>
  );
};

export default AdminInventoryDetails;