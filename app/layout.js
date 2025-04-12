import './styles/main.scss'

export const metadata = {
  title: 'Swiss Guide',
  description: 'Путеводитель по Швейцарии',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
