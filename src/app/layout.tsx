// Importa o provider do contexto do carrinho (CartContext), que gerencia o estado global do carrinho
import { CartProvider } from '@/contexts/CartContext'

// Importa o arquivo global de estilos CSS
import "./globals.css"
import { ThemeProvider } from './ThemeContex'

// Define o layout principal da aplicação
export default function RootLayout({
  children, // Recebe os filhos que serão renderizados dentro do layout
}: {
  children: React.ReactNode // Define o tipo dos filhos como React.ReactNode, ou seja, qualquer elemento React válido
}) {
  return (
    <html lang="en">
      <body>
      <ThemeProvider>
        <CartProvider>
          {children}
        </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
