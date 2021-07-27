import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({ posts }) {

  return (

    <div>

      { /* loop over the posts */}

      {posts && 
        posts.map((post) => (

          <div key={post.id}>
            <h2>{post.Title}</h2>
          </div>

        ))}

    </div>

  );
}

export async function getStaticProps() {
  // get posts from api

  const res = await fetch("http://localhost:1337/posts")
  const posts = await res.json()

  return {
    props: { posts },
  };

}