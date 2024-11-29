import { client } from '../lib/contentful';
import Link from 'next/link';
import '../../public/styles/blog.css';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

const fetchPosts = async () => {
  const response = await client.getEntries({ content_type: 'blog' });
  return response.items;
};

const BlogPage = async () => {
  const posts = await fetchPosts();

  return (
    <>
    <Nav/>
    <div className="mt-20 blog-list">
      <h1>Our Blog</h1>
      <div className="blog-grid">
        {posts.map((post) => {
          // Safely extract content preview
          const contentPreview =
            post.fields.content?.content?.[0]?.content?.[0]?.value || 'No content available';

          return (
            <div key={post.sys.id} className="blog-card">
              <img
                src={post.fields.featuredImage.fields.file.url}
                alt={post.fields.title}
                className="blog-image"
              />
              <div className="blog-content">
                <h2>{post.fields.title}</h2>
                <p>{new Date(post.fields.publishedDate).toDateString()}</p>
                <p>{contentPreview.slice(0, 100)}...</p>
                <Link href={`/blog/${post.fields.slug}`} className="read-more">
                  Read More
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default BlogPage;
