// pages/index.tsx
import Header from '../components/layout/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Welcome to Next.js Project
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            This is a comprehensive Next.js project built with TypeScript and Tailwind CSS.
          </p>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Project Features:
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>TypeScript for type safety</li>
              <li>Tailwind CSS for styling</li>
              <li>Reusable components</li>
              <li>API integration</li>
              <li>Responsive design</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}