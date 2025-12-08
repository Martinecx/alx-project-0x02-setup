// pages/home.tsx
import { useState } from 'react';
import Header from '../components/layout/Header';
import Card from '../components/common/Card';
import PostModal from '../components/common/PostModal';

interface PostData {
  title: string;
  content: string;
}

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<PostData[]>([
    { title: 'Project Overview', content: 'This project demonstrates Next.js with TypeScript and Tailwind CSS.' },
    { title: 'Features', content: 'Includes reusable components, API integration, and responsive design.' },
  ]);

  const handleAddPost = (data: PostData) => {
    setPosts([...posts, data]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold text-gray-900">
            Home Page
          </h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add New Post
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post, index) => (
            <Card
              key={index}
              title={post.title}
              content={post.content}
              className="hover:shadow-lg transition-shadow duration-300"
            />
          ))}
        </div>
        
        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddPost}
        />
      </main>
    </div>
  );
}