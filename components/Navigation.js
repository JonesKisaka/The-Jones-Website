'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="navbar">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '64px' }}>
          <Link href="/" className="nav-brand">
            Jones Kisaka
          </Link>
          
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <Link 
              href="/" 
              className={`nav-link ${pathname === '/' ? 'active' : ''}`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`nav-link ${pathname === '/about' ? 'active' : ''}`}
            >
              About
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
} 