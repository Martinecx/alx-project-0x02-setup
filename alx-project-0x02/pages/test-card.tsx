import Header from '../components/layout/Header';
import Card from '../components/common/Card';

const TestCardPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8">Card Component Test</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card
            title="Default Card"
            content="This is a default card with no variant specified."
          />
          
          <Card
            title="Primary Card"
            content="This is a primary card with blue styling."
            variant="primary"
            showFooter={true}
            footerText="Click me"
            onClick={() => alert('Primary card clicked!')}
          />
          
          <Card
            title="Secondary Card"
            content="This is a secondary card with gray styling."
            variant="secondary"
            showFooter={true}
          />
        </div>
      </main>
    </div>
  );
};

export default TestCardPage;
