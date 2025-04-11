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
      <Nav />
      <div className="mt-20 blog-list">
        <h1>Our Blog</h1>
        <div className="blog-grid">
          {posts.map((post) => {
            const contentPreview =
              post.fields.content?.content?.[0]?.content?.[0]?.value || 'No content available';
            const imageUrl = post.fields.featuredImage?.fields?.file?.url || '/default-image.jpg';

            return (
              <div key={post.sys.id} className="blog-card">
                <img
                  src={imageUrl} 
                  className="blog-image"
                  alt="Jad zeitouni"
                />
                <div className="blog-content">
                  <h2>{post.fields.title || 'Untitled'}</h2>
                  <p>
                    {post.fields.publishedDate
                      ? new Date(post.fields.publishedDate).toDateString()
                      : 'No date'}
                  </p>
                  <p>{contentPreview.slice(0, 100)}...</p>
                  <Link href={`/blog/${post.fields.slug || '#'}`} className="read-more">
                    Read More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;
