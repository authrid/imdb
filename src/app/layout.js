import './globals.css'
import Header from './components/header'
import Providers from './providers'
import Navbar from './components/navbar'
import SearchBox from './components/searchbox'

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
          <Header></Header>
          {/* Navbar */}
          <Navbar></Navbar>
          {/* SearchBox */}
          <SearchBox></SearchBox>
          {children}
        </Providers>
      </body>
    </html>
  )
}
