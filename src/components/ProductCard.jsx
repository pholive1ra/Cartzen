import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProductCard({ product, addToCart }) {
  //Entender o product vindo aqui
  return (
    <>
      <div className="relative group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 p-4">
        <Link to={`/produto/${product.id}`}>
          <div className="bg-gray-100 rounded-xl p-4 flex justify-center overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              className="h-40 object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <h2 className="text-sm font-semibold mt-3 line-clamp-2">
            {product.title}
          </h2>

          <p className="font-bold mt-1 text-gray-900">R$ {product.price}</p>
        </Link>

        <button
          onClick={() => addToCart(product)} //Adiciona ao carrinho pela função addToCart
          className="absolute bottom-4 right-4 bg-black text-white p-2 rounded-full hover:bg-cyan-500 transition"
        >
          <ShoppingCart size={18} className="cursor-pointer" />
        </button>
      </div>
    </>
  );
}
