


import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Data from "../components/Data";
import { client } from '../lib/contentful';


const fetchPosts = async () => {
  const response = await client.getEntries({ content_type: 'exh' });
  return response.items;
};

const ExhibitionGallery = async () => {

  const posts = await fetchPosts();

 

  return (
    <>
      <Nav />
      <Data posts={posts} />

      <Footer />
    </>
  );
};

export default ExhibitionGallery;
