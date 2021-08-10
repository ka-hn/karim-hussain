import * as React from 'react';
import { Link } from 'gatsby';
import Seo from '../components/seo';
import { H1, P } from '../components/page-elements/elements';

const IndexPage = () => (
  <>
    <Seo title="Home" />
    <H1>Hi, I'm Karim</H1>
    <P>
      I'm a problem solver. With help of modern technology and an open mindset I architect
      solutions, develop and design software, solve business problems, teach and engage for a
      brighter future on our planet Earth. I love technology, people and to have fun.
    </P>
    <P>
      On this site you can read about me and my thoughts in my personal blog or find out how to get
      in contact with me.
    </P>
    <P>
      <Link to="/blog/my-first-post">Go to my first blog post</Link> <br />
    </P>
  </>
);

export default IndexPage;
