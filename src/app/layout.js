import './globals.css'
import Header from './components/header'
import Providers from './providers'
import Navbar from './components/navbar'

export const metadata = {
  title: 'IMDB App',
  description: 'This is IMDb Clone',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* Header */}
          <Header>

          </Header>
          {/* Navbar */}
          <Navbar></Navbar>
          {/* SearchBox */}
          {children}
        </Providers>
      </body>
    </html>
  )
}
