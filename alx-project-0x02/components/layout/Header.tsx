// components/layout/Header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800">
            <Link href="/">
              Next.js Project
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link 
              href="/" 
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md"
            >
              Home
            </Link>
            <Link 
              href="/home" 
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md"
            >
              Home Page
            </Link>
            <Link 
              href="/about" 
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md"
            >
              About
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}