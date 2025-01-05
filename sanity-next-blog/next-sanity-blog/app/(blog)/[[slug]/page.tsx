import { useRouter } from 'next/router';
import { useState } from 'react';

type Blog = {
  title: string;
  author: string;
  date: string;
  content: string;
};

type Blogs = {
  [slug: string]: Blog;
};

export async function getStaticPaths() {
  // Example blog slugs (replace with actual data source)
  const blogSlugs = [
    'gold-surges-past-2500',
    'mcdonalds-share-price',
    'forex-risk-management',
    'margin-in-forex-trading',
    'commodity-currency-pairs',
    'forex-charts',
    'most-liquid-market',
    'how-pips-work',
    'gold-is-a-guard',
    'benefits-of-forex-trading',
    'currency-pairs-on-deriv',
  ];

  const paths = blogSlugs.map((slug) => ({ params: { slug } }));

  return { paths, fallback: false }; // Pre-render all paths
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // Define the blogs object with type `Blogs`
  const blogs: Blogs = {
    'gold-surges-past-2500': {
      title: 'Gold surges past $2500: Is more upside ahead?',
      author: 'Sadia Imran',
      date: 'Jan 5, 2025',
      content: 'Gold has surged past $2500, driven by market factors. Analysts are debating whether more upside lies ahead.',
    },
    'mcdonalds-share-price': {
      title: 'McDonald’s share price: Will value meals inspire a turnaround?',
      author: 'Sadia Imran',
      date: 'Jan 5, 2025',
      content: 'McDonald’s is banking on value meals to attract customers and boost share prices.',
    },
    // Add other blogs here...
  };

  const blog = blogs[slug] || null;

  return { props: { blog } };
}

export default function BlogPost({ blog }: { blog: Blog | null }) {
  const router = useRouter();
  const [comments, setComments] = useState<string[]>([]);
  const [commentText, setCommentText] = useState<string>('');

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!blog) {
    return <div>Blog not found</div>;
  }

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentText.trim()) {
      setComments([...comments, commentText]);
      setCommentText('');
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>{blog.title}</h1>
      <p>
        By <strong>{blog.author}</strong> on {blog.date}
      </p>
      <div style={{ marginBottom: '20px' }}>{blog.content}</div>
      <hr />
      <h2>Comments</h2>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
      <form onSubmit={handleCommentSubmit} style={{ marginTop: '20px' }}>
        <textarea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Add a comment..."
          style={{ width: '100%', height: '80px', marginBottom: '10px' }}
        />
        <button type="submit" style={{ padding: '10px 20px' }}>
          Submit
        </button>
      </form>
    </div>
  );
}
