// pages/about.tsx
import Header from '../components/layout/Header';
import Button from '../components/common/Button';

export default function AboutPage() {
  const handleClick = (message: string) => {
    alert(message);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          About Page
        </h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Button Component Demo
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">Different Sizes:</h3>
              <div className="flex flex-wrap gap-4 mb-4">
                <Button
                  size="small"
                  onClick={() => handleClick('Small button clicked!')}
                >
                  Small Button
                </Button>
                <Button
                  size="medium"
                  onClick={() => handleClick('Medium button clicked!')}
                >
                  Medium Button
                </Button>
                <Button
                  size="large"
                  onClick={() => handleClick('Large button clicked!')}
                >
                  Large Button
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">Different Shapes:</h3>
              <div className="flex flex-wrap gap-4 mb-4">
                <Button
                  shape="rounded-sm"
                  onClick={() => handleClick('Rounded-sm button clicked!')}
                >
                  Rounded-sm
                </Button>
                <Button
                  shape="rounded-md"
                  onClick={() => handleClick('Rounded-md button clicked!')}
                >
                  Rounded-md
                </Button>
                <Button
                  shape="rounded-full"
                  onClick={() => handleClick('Rounded-full button clicked!')}
                >
                  Rounded-full
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">Combinations:</h3>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="small"
                  shape="rounded-full"
                  onClick={() => handleClick('Small rounded-full clicked!')}
                >
                  Small & Rounded-full
                </Button>
                <Button
                  size="large"
                  shape="rounded-sm"
                  onClick={() => handleClick('Large rounded-sm clicked!')}
                >
                  Large & Rounded-sm
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            About This Project
          </h2>
          <p className="text-gray-700 mb-4">
            This project demonstrates the implementation of reusable components in Next.js with TypeScript.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Type-safe components with TypeScript interfaces</li>
            <li>Reusable and configurable UI components</li>
            <li>Responsive design with Tailwind CSS</li>
            <li>Clean and maintainable code structure</li>
          </ul>
        </div>
      </main>
    </div>
  );
}