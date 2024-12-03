// Importa o provider do contexto do carrinho (CartContext), que gerencia o estado global do carrinho
import { CartProvider } from '@/contexts/CartContext'

// Importa o arquivo global de estilos CSS
import "./globals.css"

// Define o layout principal da aplicação
export default function RootLayout({
  children, // Recebe os filhos que serão renderizados dentro do layout
}: {
  children: React.ReactNode // Define o tipo dos filhos como React.ReactNode, ou seja, qualquer elemento React válido
}) {
  return (
    // Define a estrutura HTML inicial da página
    <html lang="en"> {/* Define o idioma da página como inglês */}
      <body>
        {/* Envolve o conteúdo da página com o CartProvider */}
        <CartProvider>
          {children} {/* Renderiza os componentes filhos passados para este layout */}
        </CartProvider>
      </body>
    </html>
  )
}
