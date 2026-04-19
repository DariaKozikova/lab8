import { useNavigate } from 'react-router-dom';
import { inventoryApi } from '../services/inventoryApi';
import InventoryForm from '../components/inventory/InventoryForm';

const AdminInventoryCreate = () => {
  const navigate = useNavigate();
  const handleCreate = (data) => {
    const fd = new FormData();
    fd.append('inventory_name', data.name);
    fd.append('description', data.desc);
    if (data.file) fd.append('photo', data.file);
    inventoryApi.create(fd).then(() => navigate('/admin'));
  };
  return (
    <div className="container">
      <h2>Новий інвентар</h2>
      <InventoryForm onSubmit={handleCreate} />
    </div>
  );
};
export default AdminInventoryCreate;