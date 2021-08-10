import * as React from 'react';
import { Link } from 'gatsby';
import { HEADER, H4 } from '../components/page-elements/elements';

export default function Header({ siteTitle }) {
  return (
    <HEADER>
      <div style={{ margin: '0 auto', maxWidth: '960px', padding: '1.45rem 1.0875rem' }}>
        <H4>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            <b>{siteTitle}</b>
          </Link>
        </H4>
      </div>
    </HEADER>
  );
}
