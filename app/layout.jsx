
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="p-6">
        <header className="mb-6">
          <h1 className="text-2xl font-bold">Gift Me Right</h1>
        </header>
        {children}
      </body>
    </html>
  )
}
