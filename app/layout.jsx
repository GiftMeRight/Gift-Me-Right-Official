
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
  <head>
    <link rel="icon" href="/favicon.jpg" />
  </head>

      <body className="p-6">
        <header className="mb-6">
          <img
  src="/logo.jpg"
  alt="Gift Me Right logo"
  className="h-10"
/>

        </header>
        {children}
      </body>
    </html>
  )
}
