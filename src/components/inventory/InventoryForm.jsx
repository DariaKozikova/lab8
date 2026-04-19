import { useState } from 'react';
const InventoryForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return alert("Поле 'Назва' є обов'язковим!");
    onSubmit({ name, desc, file });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input placeholder="Назва (обов'язково) *" onChange={e => setName(e.target.value)} />
      <textarea placeholder="Опис" onChange={e => setDesc(e.target.value)} />
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button type="submit">Створити</button>
    </form>
  );
};
export default InventoryForm;