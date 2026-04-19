const ConfirmModal = ({ isOpen, onConfirm, onCancel }) => {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Підтвердження</h3>
        <p>Ви впевнені, що хочете видалити цей предмет?</p>
        <button className="btn-danger" onClick={onConfirm}>Видалити</button>
        <button onClick={onCancel}>Скасувати</button>
      </div>
    </div>
  );
};
export default ConfirmModal;