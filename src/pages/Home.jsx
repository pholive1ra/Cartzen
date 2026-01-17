//Aqui vai ser renderizado os componentes que aparecerão na tela de home
import { useState } from "react";
import Navbar from "../components/Navbar";
import Showcase from "../components/Showcase";
import SearchBar from "../components/SearchBar";
import CartModal from "../components/CartModal";

export default function Home() {
  const [search, setSearch] = useState("");
  const [openCart, setOpenCart] = useState(false);

  const handleOpenCart = () => {
    setOpenCart(true);
  };

  return (
    <>
      <Navbar onOpenCart={handleOpenCart} />
      <SearchBar search={search} setSearch={setSearch} />
      <Showcase search={search} />
    </>
  );
}
