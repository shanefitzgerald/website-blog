import Link from 'next/link';
import Prismic from 'prismic-javascript';

import link from '../lib/links';

const Posts = (props) => {
  return (
    <>
      <h1>Blog Posts from prismic</h1>
        <ul>
          {props.posts.map(post => {
            const slug = post.slugs[0];

            return <li key={post.id}>
              <Link as={`/p/${post.id}/`} href={`/post?id=${post.id}`}>
                <a>{slug}</a>
              </Link>
            </li>
          })}
      </ul>
    </>
  )
}

Posts.getInitialProps = async function() {
  const url = link.cms();
  const api = await Prismic.getApi(url);
  const allPosts = await api.query('');

  return {
    posts: allPosts.results
  };
}

export default Posts