import { Metadata } from 'next'
import './globals.css'
import Navigation from '../components/Navigation'
import { ThemeProvider } from './context/ThemeContext'

export const metadata = {
  title: 'Jones Kisaka - Software & Embedded Systems Engineer',
  description: 'Portfolio website of Jones Kisaka, a passionate Software & Embedded Systems Engineer specializing in IoT and Embedded Systems.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Navigation />
          <main>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
} 