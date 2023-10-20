/* eslint-disable react/prop-types */
const Create = ({ input, setInput, handleSubmit, edit, handleUpdate }) => {
  return (
    <div className="container">
      <h2 className="my-4 text-center">Add a Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={input.name}
            onChange={(e) => setInput({ ...input, name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            type="text"
            className="form-control"
            value={input.image}
            onChange={(e) => setInput({ ...input, image: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            type="text"
            className="form-control mb-3"
            value={input.price}
            onChange={(e) => setInput({ ...input, price: e.target.value })}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {edit ? "Update" : "Add"}
        </button>
        <button className="btn btn-secondary" onClick={handleUpdate}>
          Update
        </button>
      </form>
    </div>
  );
};
export default Create;
