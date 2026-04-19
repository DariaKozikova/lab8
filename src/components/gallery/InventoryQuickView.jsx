const InventoryQuickView = ({ item, onClose }) => {
  if (!item) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <img src={item.photo} alt="full" className="quick-img" />
        <h2>{item.inventory_name}</h2>
        <p>{item.description}</p>
        <button onClick={onClose}>Закрити</button>
      </div>
    </div>
  );
};
export default InventoryQuickView;