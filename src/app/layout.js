import './globals.css'

export const metadata = {
  title: 'IMDB App',
  description: 'This is IMDb Clone',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
