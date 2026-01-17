import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product)
    return (
      <p className="text-center font-bold text-2xl">Carregando produto...</p>
    );
  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto mt-30 grid grid-cols-2 gap-10">
        <div className="bg-gray-100 overflow-hidden rounded-2xl p-8 flex items-center justify-center shadow-sm hover:shadow-md transition">
          <img
            src={product.image}
            alt={product.title}
            className="w-72 object-contain transition-transform duration-300 hover:scale-110"
          />
        </div>

        <div>
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-gray-600 mt-4">{product.description}</p>

          <p className="text-3xl font-bold mt-6">R$ {product.price}</p>

          <button className="mt-6 bg-cyan-500 hover:bg-cyan-600 transition cursor-pointer text-white font-bold px-6 py-3 rounded-lg">
            Comprar
          </button>
        </div>
      </div>
    </>
  );
}
