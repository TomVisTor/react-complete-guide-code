import Link from "next/link";
import { Fragment } from "react";

function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs">NextJs Is A Great Framework</Link>
        </li>
        <li>Somthing Else</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
