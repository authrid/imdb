import './globals.css'
import Header from './components/header'

export const metadata = {
  title: 'IMDB App',
  description: 'This is IMDb Clone',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        <Header>

        </Header>
        {/* Navbar */}
        {/* SearchBox */}
        {children}
      </body>
    </html>
  )
}
