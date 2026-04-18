import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useInventory } from '../store/InventoryContext';
import { inventoryApi } from '../services/inventoryApi';
import InventoryTable from '../components/inventory/InventoryTable';
import ConfirmModal from '../components/inventory/ConfirmModal';

const AdminInventory = () => {
  const { items, isLoading, error, removeItemFromState } = useInventory();
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const handleDeleteClick = (id) => {
    setSelectedId(id); 
    setIsModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await inventoryApi.deleteInventory(selectedId);
      
      removeItemFromState(selectedId);
      
      setIsModalOpen(false);
      
      console.log(`Товар з ID ${selectedId} успішно видалено`);
    } catch (err) {
      console.error("Помилка при видаленні:", err);
      alert("Не вдалося видалити товар. Спробуйте ще раз.");
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        <span className="ml-3 text-gray-600">Завантаження складу...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border-l-4 border-red-500 p-4 my-10 text-center">
        <p className="text-red-700 font-bold">Помилка!</p>
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-xl shadow-sm">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Адміністрування складу</h1>
          <p className="text-gray-500 text-sm">Керуйте наявним інвентарем та додавайте нові позиції</p>
        </div>
        
        <Link 
          to="/admin/create" 
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition-all shadow-md hover:shadow-lg flex items-center gap-2"
        >
          <span className="text-xl">+</span> Додати товар
        </Link>
      </div>

      {items.length > 0 ? (
        <div className="animate-fade-in">
          <InventoryTable items={items} onDelete={handleDeleteClick} />
        </div>
      ) : (
        <div className="bg-white p-20 text-center rounded-xl shadow-sm border-2 border-dashed border-gray-200">
          <div className="text-5xl mb-4">📦</div>
          <h3 className="text-xl font-semibold text-gray-700">Склад порожній</h3>
          <p className="text-gray-500 mt-2">Ви ще не додали жодного товару до системи.</p>
        </div>
      )}

      <ConfirmModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmDelete}
        title="Видалити цей товар?"
        message="Ви впевнені, що хочете видалити цю позицію? Дані буде втрачено назавжди."
      />
    </div>
  );
};

export default AdminInventory;