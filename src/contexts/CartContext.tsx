// Adicionando a diretiva 'use client' no início do arquivo para garantir que o código seja executado no cliente
'use client'; 

import { createContext, useContext, useState, ReactNode } from 'react';

// Definindo as interfaces para tipar os dados
interface Product {
  id: number; // Identificador único do produto
  name: string; // Nome do produto
  price: number; // Preço do produto
  image: string; // Imagem do produto
}

interface CartItem extends Product {
  quantity: number; // Quantidade do produto no carrinho
}

interface CartContextType {
  items: CartItem[]; // Lista de itens no carrinho
  addToCart: (product: Product) => void; // Função para adicionar produto ao carrinho
  removeFromCart: (productId: number) => void; // Função para remover produto do carrinho
  updateQuantity: (productId: number, quantity: number) => void; // Função para atualizar a quantidade de um produto
  clearCart: () => void; // Função para limpar o carrinho
  total: number; // Total do valor dos itens no carrinho
}

// Criando o Context do carrinho, inicialmente com valor undefined
const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider Component - Fornece o estado e as funções do carrinho para os componentes filhos
export function CartProvider({ children }: { children: ReactNode }) {
  // Estado que armazena os itens do carrinho
  const [items, setItems] = useState<CartItem[]>([]);

  // Função para adicionar item ao carrinho
  const addToCart = (product: Product) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(item => item.id === product.id); // Verifica se o item já existe no carrinho
      
      if (existingItem) {
        // Se o item já estiver no carrinho, aumenta a quantidade
        return currentItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 } // Atualiza a quantidade do item
            : item
        );
      }

      // Se não estiver no carrinho, adiciona o item com a quantidade 1
      return [...currentItems, { ...product, quantity: 1 }];
    });
  };

  // Função para remover item do carrinho
  const removeFromCart = (productId: number) => {
    setItems(currentItems => 
      currentItems.filter(item => item.id !== productId) // Remove o item com o id passado
    );
  };

  // Função para atualizar a quantidade de um item no carrinho
  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity < 1) return; // Não permite quantidade menor que 1

    setItems(currentItems =>
      currentItems.map(item =>
        item.id === productId
          ? { ...item, quantity } // Atualiza a quantidade do item
          : item
      )
    );
  };

  // Função para limpar o carrinho
  const clearCart = () => {
    setItems([]); // Define o estado de items como um array vazio
  };

  // Calcula o total do valor do carrinho
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity, // Calcula o total somando o valor de cada item (preço * quantidade)
    0 // Valor inicial é 0
  );

  // Retorna o Provider com o valor do contexto (items, funções de manipulação, e total)
  return (
    <CartContext.Provider 
      value={{ 
        items, 
        addToCart, 
        removeFromCart, 
        updateQuantity, 
        clearCart, 
        total 
      }}
    >
      {children} {/* Renderiza os componentes filhos que terão acesso ao contexto */}
    </CartContext.Provider>
  );
}

// Hook personalizado para usar o carrinho
export function useCart() {
  const context = useContext(CartContext); // Acessa o contexto do carrinho

  // Se o contexto for undefined, lança um erro, indicando que deve ser usado dentro de um CartProvider
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context; // Retorna o valor do contexto, contendo items, funções e total
}
