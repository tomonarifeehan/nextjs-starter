import './globals.css'
import Nav from './auth/Nav'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`mx-4 md:mx-48 xl:mx-96 font-sans bg-gray-200`}>
        <Nav />
        {children}
      </body>
    </html>
  )
}
