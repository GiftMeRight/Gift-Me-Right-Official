import Image from "next/image"

import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className="p-6">
        <header className="mb-6">
          <Image
  src="/logo.png"
  alt="Gift Me Right logo"
  width={140}
  height={140}
  priority
/>


        </header>
        {children}
      </body>
    </html>
  )
}
