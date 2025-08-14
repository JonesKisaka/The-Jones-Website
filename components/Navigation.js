'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav style={{ backgroundColor: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', borderBottom: '1px solid #e5e7eb' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '64px' }}>
          <Link href="/" style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#007acc', textDecoration: 'none' }}>
            Jones Kisaka
          </Link>
          
          <div style={{ display: 'flex', gap: '2rem' }}>
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
            <Link 
              href="/contact" 
              className={`nav-link ${pathname === '/contact' ? 'active' : ''}`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 