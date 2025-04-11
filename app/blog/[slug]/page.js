 

import { client } from '../../lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import '../../../public/styles/blog.css';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';

const fetchPost = async (slug) => {
  const response = await client.getEntries({
    content_type: 'blog',
    'fields.slug': slug,
  });

  if (response.items.length === 0) {
    throw new Error('Post not found');
  }

  return response.items[0];
};

const BlogPost = async ({ params }) => {
  const { slug } = await params; // Await params explicitly

  const post = await fetchPost(slug);

  return (
    <>
    <Nav/>
    <div className='mt-20'></div>
    <div className="blog-detail">
      <h1>{post.fields.title}</h1>
      <p>{new Date(post.fields.publishedDate).toDateString()}</p>
      <img
        src={post.fields.featuredImage.fields.file.url}
        alt="Jad zeitouni"
        className="detail-image"
      />
      <div className="content">
        {documentToReactComponents(post.fields.content)}
      </div>
    </div>
    <div className='mt-20'></div>
    <Footer/>
    </>
  );
};

export default BlogPost;
