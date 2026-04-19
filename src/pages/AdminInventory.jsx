import { useEffect, useState } from 'react';
import { inventoryApi } from '../services/inventoryApi';
import InventoryTable from '../components/inventory/InventoryTable';
import ConfirmModal from '../components/inventory/ConfirmModal';
import { Link } from 'react-router-dom';

const AdminInventory = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [delId, setDelId] = useState(null);

  const loadData = () => {
    setLoading(true);
    inventoryApi.getAll()
      .then(res => {
        setItems(res.data);
        setError(null);
      })
      .catch(() => {
        setError("Помилка завантаження складу");
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadData();
  }, []);

  const confirmDelete = () => {
    inventoryApi.delete(delId)
      .then(() => {
        setDelId(null);
        loadData();
      })
      .catch(() => {
        alert("Не вдалося видалити");
      });
  };

  if (loading) return <p>Завантаження таблиці...</p>;

  return (
    <div className="container">
      <div className="flex-header">
        <h1>Склад (Адмін)</h1>
        <Link to="/admin/create" className="btn-add">Додати +</Link>
      </div>

      {error && <p className="error">{error}</p>}

      {items.length === 0 ? (
        <p>Склад порожній</p>
      ) : (
        <InventoryTable items={items} onDelete={(id) => setDelId(id)} />
      )}

      <ConfirmModal
        isOpen={!!delId}
        onConfirm={confirmDelete}
        onCancel={() => setDelId(null)}
      />
    </div>
  );
};

export default AdminInventory;