import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { inventoryApi } from '../services/inventoryApi';

const AdminInventoryEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [item, setItem] = useState({ inventory_name: '', description: '' });
  const [error, setError] = useState(null);

  useEffect(() => {
    inventoryApi.getById(id)
      .then(res => {
        setItem(res.data);
        setError(null);
      })
      .catch(() => setError("Помилка завантаження"));
  }, [id]);

  const updateText = () => {
    inventoryApi.updateText(id, {
      inventory_name: item.inventory_name,
      description: item.description
    })
    .then(() => alert('Текст оновлено'))
    .catch(() => alert("Помилка оновлення тексту"));
  };

  const updatePhoto = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    inventoryApi.updatePhoto(id, file)
      .then(() => navigate('/admin'))
      .catch(() => alert("Помилка оновлення фото"));
  };

  return (
    <div className="container">
      <h2>Редагування #{id}</h2>

      {error && <p className="error">{error}</p>}

      <div className="edit-box">
        <h3>Текстові дані</h3>
        <input
          value={item.inventory_name}
          onChange={e => setItem({ ...item, inventory_name: e.target.value })}
        />
        <textarea
          value={item.description}
          onChange={e => setItem({ ...item, description: e.target.value })}
        />
        <button onClick={updateText}>Зберегти текст</button>
      </div>

      <div className="edit-box">
        <h3>Фото</h3>
        <input type="file" onChange={updatePhoto} />
      </div>
    </div>
  );
};

export default AdminInventoryEdit;