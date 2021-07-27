export default function Post({ post }) {

    return (

        <div>{ post.Title }</div>

    );

}

// tell next.js how many pages 
export async function getStaticPaths() {

    const res = await fetch("http://localhost:1337/posts");
    const data = await res.json()

    const paths = data.map((post) => ({
        params: { slug: post.Slug },
    }))

    return {

        paths,
        fallback: false

    };

}

// get data for page
export async function getStaticProps({ params }) {

    const { slug } = params;

    const res = await fetch(`http://localhost:1337/posts?Slug=${slug}`);
    const data = await res.json();

    const post = data[0];

    return {
        props: { post },
    }

}

