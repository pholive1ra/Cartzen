export default function SearchBar({ search, setSearch }) {
  return (
    <>
      <div className="flex justify-center mt-6">
        <input
          type="text"
          placeholder="Buscar Produtos"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="rounded-md w-64 border px-4 py-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
      </div>
    </>
  );
}
