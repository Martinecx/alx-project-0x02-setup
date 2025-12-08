// pages/about.tsx
import Header from '../components/layout/Header';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          About Page
        </h1>
        <p className="text-lg text-gray-700">
          This is the about page of our Next.js application.
        </p>
      </main>
    </div>
  );
}
