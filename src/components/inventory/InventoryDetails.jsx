const InventoryDetails = ({ item }) => (
  <div className="details-card">
    <img src={item.photo} alt={item.inventory_name} className="full-img" />
    <h1>{item.inventory_name}</h1>
    <p>{item.description}</p>
  </div>
);
export default InventoryDetails;