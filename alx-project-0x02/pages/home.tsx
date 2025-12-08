// pages/home.tsx
import Header from '../components/layout/Header';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Navigation Header */}
      <Header />
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to the <span className="text-blue-600">Home Page</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            This page demonstrates routing functionality in Next.js using the Pages Router.
            Navigate between different pages using the header links.
          </p>
        </div>
        
        {/* Routing Demonstration Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-4">
            Routing in Next.js - Pages Router
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* How It Works */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800">How It Works</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">File-Based Routing</h4>
                    <p className="text-gray-600 mt-1">
                      Each file in the <code className="bg-gray-100 px-2 py-1 rounded">pages/</code> directory becomes a route
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Automatic Routing</h4>
                    <p className="text-gray-600 mt-1">
                      Next.js automatically creates routes based on file names
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Navigation</h4>
                    <p className="text-gray-600 mt-1">
                      Use <code className="bg-gray-100 px-2 py-1 rounded">next/link</code> for client-side navigation
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Current Pages */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800">Available Pages</h3>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">Home</h4>
                      <p className="text-gray-600 text-sm mt-1">Current page</p>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                      Active
                    </span>
                  </div>
                  <code className="block mt-2 text-sm bg-gray-100 p-2 rounded">
                    /home
                  </code>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">About</h4>
                      <p className="text-gray-600 text-sm mt-1">Project information</p>
                    </div>
                    <Link 
                      href="/about"
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full hover:bg-blue-200 transition-colors"
                    >
                      Visit →
                    </Link>
                  </div>
                  <code className="block mt-2 text-sm bg-gray-100 p-2 rounded">
                    /about
                  </code>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">Main</h4>
                      <p className="text-gray-600 text-sm mt-1">Landing page</p>
                    </div>
                    <Link 
                      href="/"
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full hover:bg-blue-200 transition-colors"
                    >
                      Visit →
                    </Link>
                  </div>
                  <code className="block mt-2 text-sm bg-gray-100 p-2 rounded">
                    /
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Navigation Practice */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-8 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Practice Navigation</h3>
            <p className="mb-6 opacity-90">
              Try navigating between pages using the buttons below or the header navigation
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/"
                className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-200 transform hover:-translate-y-1 shadow-lg"
              >
                ← Go to Main Page
              </Link>
              <Link 
                href="/about"
                className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-200 transform hover:-translate-y-1 shadow-lg"
              >
                Visit About Page →
              </Link>
              <button
                onClick={() => window.history.back()}
                className="px-6 py-3 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-900 transition-all duration-200 shadow-lg"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">ALX Project 0x02 - Task 2: Basic Routing</p>
          <p className="text-gray-400 text-sm">
            This page demonstrates file-based routing in Next.js Pages Router
          </p>
        </div>
      </footer>
    </div>
  );
};

// Add TypeScript type checking for the page
HomePage.displayName = 'HomePage';

export default HomePage;