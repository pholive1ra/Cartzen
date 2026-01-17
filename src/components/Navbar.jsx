import { ShoppingCart } from "lucide-react";
import Logo from "../assets/image/logotipo/logo.png";
import { Link } from "react-router-dom";

export default function Navbar({ onOpenCart }) {
  return (
    <>
      <div className="flex justify-center mt-12 w-full">
        <nav className="flex max-w-4xl items-center justify-between h-20 gap-10 px-10 rounded-full shadow-md bg-white">
          <Link to="/">
            <img className="w-48" src={Logo} alt="Cartzen Logo" />{" "}
          </Link>
          <ul className="flex gap-6 items-center text-sm">
            <Link to="/" className="hover:text-cyan-500 cursor-pointer">
              Home
            </Link>
            <li className="hover:text-cyan-500 cursor-pointer">Produtos</li>
            <li className="hover:text-cyan-500 cursor-pointer">Contato</li>
            <li
              onClick={onOpenCart}
              className="hover:text-green-400 cursor-pointer"
            >
              <ShoppingCart size={20} />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
