import fetch from 'isomorphic-unfetch';
import Prismic from 'prismic-javascript';

import link from '../lib/links';

const Post = (props) => {
  const title = props.post.title[0].text;
  const img = props.post.image.url;
  const text = props.post.text[0].text;

  return <>
    <h1>{title}</h1>
    <p>{text}</p>
    <img src={img}/>
  </>
}


Post.getInitialProps = async function (context) {
  const { id } = context.query;
  const url = link.cms();
  const api = await Prismic.getApi(url);
  const post = await api.getByID(id);

  return { post: post.data }
}

export default Post