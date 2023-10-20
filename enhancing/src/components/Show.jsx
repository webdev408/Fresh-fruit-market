/* eslint-disable react/prop-types */
const Show = ({ products, addProduct, deleteProduct, handleEdit, total }) => {
  return (
    <div className="container">
      <h2 className="my-4 text-center">Product List</h2>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>
                <img
                  className="img-fluid img-thumbnail"
                  src={product.image}
                  alt="photo"
                />
              </td>
              <td>${product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <button
                  className="btn btn-primary me-1"
                  onClick={() => addProduct(product.id)}
                >
                  Add
                </button>
                <button
                  className="btn btn-sm btn-warning me-1"
                  onClick={() => handleEdit(product.id)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => deleteProduct(product.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3 className="text-center">Total: ${total}</h3>
    </div>
  );
};
export default Show;
