'use client';
import { useCart } from '@/contexts/CartContext';


export default function Cart() {
  const { items, removeFromCart, updateQuantity, total, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="p-4 text-center">
        <p>Seu carrinho está vazio</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      {items.map((item) => (
        <div 
          key={item.id}
          className="flex items-center justify-between border-b py-4"
        >
          <div className="flex items-center gap-4">
            <img 
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-cover rounded"
            />
            <div>
              <h4 className="font-medium">{item.name}</h4>
              <p className="text-gray-600">R$ {item.price.toFixed(2)}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="px-2 py-1 border rounded"
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="px-2 py-1 border rounded"
              >
                +
              </button>
            </div>
            
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 hover:text-red-700"
            >
              Remover
            </button>
          </div>
        </div>
      ))}
      
      <div className="mt-4 flex justify-between items-center">
        <button
          onClick={clearCart}
          className="text-red-500 hover:text-red-700"
        >
          Limpar Carrinho
        </button>
        <div className="text-xl font-bold">
          Total: R$ {total.toFixed(2)}
        </div>
      </div>
    </div>
  );
}