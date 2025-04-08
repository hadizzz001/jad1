 

import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Data4 from "../components/Data4"; 
import { client } from '../lib/contentful';


const fetchPosts = async () => {
  const response = await client.getEntries({ content_type: 'about' });
  return response.items;
};
const fetchPosts1 = async () => {
  const response = await client.getEntries({ content_type: 'home' });
  return response.items;
};


export default async function Home() {
    const posts = await fetchPosts(); 
    const posts1 = await fetchPosts1(); 

    return (
        <>
            <Nav />

            <Data4 posts={posts} posts1={posts1} />

            <Footer />
        </>


    );
}
