import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Create from "./components/Create";
import Home from "./components/Home";
import Show from "./components/Show";

const App = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Papaya",
      image: "https://source.unsplash.com/100x100/?papaya",
      price: 3.98,
      quantity: 1,
    },
    {
      id: 2,
      name: "Orange",
      image: "https://source.unsplash.com/100x100/?orange",
      price: 2.99,
      quantity: 1,
    },
    {
      id: 3,
      name: "Banana",
      image: "https://source.unsplash.com/100x100/?banana",
      price: 0.59,
      quantity: 1,
    },
    {
      id: 4,
      name: "Apple",
      image: "https://source.unsplash.com/100x100/?apple",
      price: 0.99,
      quantity: 1,
    },
  ]);
  const [input, setInput] = useState({
    name: "",
    image: "",
    price: "",
    quantity: "",
  });
  const [edit, setEdit] = useState(false);
  const addProduct = () => {
    const newProduct = {
      id: products.length + 1,
      name: "Mango",
      image: "https://source.unsplash.com/100x100/?mango",
      price: 2.98,
      quantity: 1,
    };
    setProducts([newProduct, ...products]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: products.length + 1,
      name: input.name,
      image: input.image,
      price: input.price,
      quantity: 1,
    };
    setProducts([newProduct, ...products]);
    setInput({
      name: "",
      image: "",
      price: "",
      quantity: "",
    });
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedList = products.map((product) => {
      if (product.id === input.id) {
        return input;
      }
      return product;
    });
    setProducts(updatedList);
    setInput({
      name: "",
      image: "",
      price: "",
      quantity: "",
    });
    setEdit(false);
  };
  const handleEdit = (id) => {
    const productToEdit = products.find((product) => product.id === id);
    setInput(productToEdit);
  };
  const deleteProduct = (id) => {
    const newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts);
  };
  let total = 0;
  products.forEach((product) => {
    total += product.price * product.quantity;
  });
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/show"
          element={
            <Show
              total={total}
              products={products}
              addProduct={addProduct}
              deleteProduct={deleteProduct}
              handleEdit={handleEdit}
            />
          }
        />
        <Route
          path="/create"
          element={
            <Create
              input={input}
              setInput={setInput}
              handleSubmit={handleSubmit}
              edit={edit}
              handleUpdate={handleUpdate}
            />
          }
        />
      </Routes>
      <Footer />
    </>
  );
};
export default App;
