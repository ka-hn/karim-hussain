import * as React from 'react';
import { Link } from 'gatsby';
import Seo from '../components/seo';
import { H1, P } from '../components/page-elements/elements';

const IndexPage = () => (
  <>
    <Seo title="Home" />
    <H1>Hi people</H1>
    <P>Welcome to your new Gatsby site.</P>
    <P>Now go build something great.</P>
    <P>
      <Link to="/blog/my-first-post/">Go to my first Markdown blog post</Link> <br />
    </P>
  </>
);

export default IndexPage;
