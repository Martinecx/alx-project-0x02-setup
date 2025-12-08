import Header from '../components/layout/Header';
import Card from '../components/common/Card';

const HomePage = () => {
  const handleCardClick = (title: string) => {
    alert(`Card clicked: ${title}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Card Component Examples
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card
            title="Getting Started"
            content="Learn how to set up a Next.js project with TypeScript and Tailwind CSS."
            onClick={() => handleCardClick("Getting Started")}
          />
          
          <Card
            title="TypeScript Guide"
            content="Master TypeScript for better code quality and developer experience."
            variant="primary"
            showFooter={true}
            footerText="Read guide"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card
            title="Basic Card"
            content="This is a basic card without any special styling."
          />
          
          <Card
            title="Primary Card"
            content="This card uses the primary variant with blue styling."
            variant="primary"
            showFooter={true}
          />
          
          <Card
            title="Secondary Card"
            content="This card uses the secondary variant with gray styling."
            variant="secondary"
            onClick={() => handleCardClick("Secondary Card")}
          />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
