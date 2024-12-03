
import ProductList from '@/components/ProductList';
import Cart from '@/components/Cart';

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center my-8">
        Loja Virtual
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ProductList />
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Carrinho de Compras</h2>
          <Cart />
        </div>
      </div>
    </main>
  );
}