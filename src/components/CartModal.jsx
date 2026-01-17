export default function CartModal({ items, onClose, removeFromCart }) {
  const total = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="bg-white rounded-xl shadow-lg w-80 p-6 flex flex-col">
        {/* Cabeçalho */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Seu Carrinho</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 cursor-pointer text-lg font-bold"
          >
            ✕
          </button>
        </div>

        {/* Lista de produtos */}
        {items.length === 0 ? (
          <p className="text-gray-600">Carrinho vazio</p>
        ) : (
          <div className="flex flex-col space-y-4 max-h-64 overflow-y-auto">
            {items.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-12 w-12 object-contain rounded"
                  />
                  <div>
                    <p className="font-semibold text-sm line-clamp-2">
                      {item.title}
                    </p>
                    <p className="text-gray-700 text-sm">
                      R$ {item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
                <button
                  className="text-red-500 hover:text-red-700 text-sm font-bold"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remover
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="mt-4 border-t pt-4 font-bold text-lg">
          Total: R$ {total.toFixed(2)}
        </div>

        <button className="mt-4 bg-cyan-500 text-white px-4 py-2 rounded hover:bg-cyan-600">
          Finalizar Compra
        </button>
      </div>
    </div>
  );
}
