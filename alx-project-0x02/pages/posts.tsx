import React, { useState } from 'react';
import PostModal from '@/components/common/PostModal';
import Button from '@/components/common/Button';

interface Post {
  id: number;
  title: string;
  content: string;
}

const PostsPage: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  // Sample posts — replace with API or data source later
  const posts: Post[] = [
    { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
    { id: 2, title: 'Second Post', content: 'Details of the second post go here.' },
    { id: 3, title: 'Another Post', content: 'More content for demonstration purposes.' },
  ];

  const openModal = (post: Post) => {
    setSelectedPost(post);
    setModalOpen(true);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Posts</h1>

      <div className="grid gap-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-lg p-5 border hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
            <p className="text-gray-600 mt-2 line-clamp-2">{post.content}</p>

            <Button
              label="Read More"
              onClick={() => openModal(post)}
              className="mt-4"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      <PostModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={selectedPost?.title || ''}
        content={selectedPost?.content || ''}
      />
    </div>
  );
};

export default PostsPage;
