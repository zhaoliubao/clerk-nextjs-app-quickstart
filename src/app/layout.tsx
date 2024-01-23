import { ClerkProvider } from '@clerk/nextjs'
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
        {children}
        <div>
            将前端页面包装到这个面
        </div>
        </body>
      </html>
    </ClerkProvider>
  )
}
