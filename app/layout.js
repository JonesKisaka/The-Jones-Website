import { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'

export const metadata = {
  title: 'Jones Kisaka - Software & Embedded Systems Engineer',
  description: 'Portfolio website of Jones Kisaka, a passionate Software & Embedded Systems Engineer specializing in IoT and Embedded Systems.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
} 