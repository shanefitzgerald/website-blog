/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Link from 'next/link';

const style = css`
  color: hotpink;
`

export default () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href={`/`}>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href={`/about`}>
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href={`/posts`}>
            <a>Posts</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}