import { Link } from 'react-router-dom';
const InventoryTable = ({ items, onDelete }) => (
  <table className="admin-table">
    <thead>
      <tr>
        <th>Фото</th>
        <th>Назва</th>
        <th>Опис</th>
        <th>Дії</th>
      </tr>
    </thead>
    <tbody>
      {items.map(item => (
        <tr key={item.id}>
          <td><img src={item.photo} alt="img" width="50" /></td>
          <td>{item.inventory_name}</td>
          <td>{item.description}</td>
          <td>
            <Link to={`/admin/details/${item.id}`}>Перегляд </Link>
            <Link to={`/admin/edit/${item.id}`}>      Редагувати           </Link>
            <button onClick={() => onDelete(item.id)}> Видалити</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
export default InventoryTable;