import { Link } from 'react-router-dom';
import { useInventory } from '../store/InventoryContext';
import InventoryTable from '../components/inventory/InventoryTable';

const AdminInventory = () => {
  const { items, isLoading, error } = useInventory();

  if (isLoading) return <div className="text-center py-10">Завантаження даних...</div>;
  if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Інвентар складу</h1>
        <Link 
          to="/admin/create" 
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          + Додати товар
        </Link>
      </div>

      {items.length > 0 ? (
        <InventoryTable items={items} />
      ) : (
        <div className="bg-white p-10 text-center rounded-lg shadow">
          Склад порожній. Додайте перший товар!
        </div>
      )}
    </div>
  );
};

export default AdminInventory;