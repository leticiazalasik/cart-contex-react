'use client';
import { useCart } from '@/contexts/CartContext';

const products = [
  {
    id: 1,
    name: "Tênis Nike",
    price: 499.99,
    image: "/tenis-nike.jpg"
  },
  {
    id: 2,
    name: "Camiseta Adidas",
    price: 89.99,
    image: "/camiseta-adidas.webp"
  },
  {
    id: 3,
    name: "Relógio Cassio",
    price: 399.99,
    image: "/relogio-cassio.webp"
  },
];

export default function ProductList() {
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <div 
          key={product.id}
          className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
        >
          <img 
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover rounded-md"
          />
          <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-600">
            R$ {product.price.toFixed(2)}
          </p>
          <button
            onClick={() => addToCart(product)}
            className="mt-2 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Adicionar ao Carrinho
          </button>
        </div>
      ))}
    </div>
  );
}