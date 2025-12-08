// components/layout/Header.tsx
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  
  const isActive = (pathname: string) => {
    return router.pathname === pathname;
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/home', label: 'Home Page' },
    { href: '/about', label: 'About' },
    { href: '/posts', label: 'Posts' },
    { href: '/users', label: 'Users' },
  ];

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800">
            <Link href="/" className="hover:text-gray-600 transition-colors">
              Next.js Project
            </Link>
          </div>
          
          <div className="flex space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  px-4 py-2 rounded-md transition-colors duration-200
                  ${isActive(link.href)
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }
                `}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}