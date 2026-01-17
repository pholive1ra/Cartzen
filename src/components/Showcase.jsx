import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import CartModal from "./CartModal";

export default function Showcase({ search }) {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    setIsCartOpen(true);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <>
      <h1 className="text-center font-bold text-2xl uppercase mt-32">
        Nossos Produtos
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 px-10">
        {products
          .filter((product) =>
            product.title.toLowerCase().includes(search.toLowerCase()),
          )
          .map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart} //Passa a função para o card
            />
          ))}
      </div>
      {isCartOpen && (
        <CartModal
          items={cartItems}
          onClose={() => setIsCartOpen(false)}
          removeFromCart={removeFromCart}
        />
      )}
    </>
  );
}
