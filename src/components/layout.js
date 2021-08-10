import * as React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './header';
import { Link } from 'gatsby';
import { FOOTER } from '../components/page-elements/elements';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title.split('-')[0] || `Title`} linkTo="/" />
      <div style={{ margin: '0 auto', maxWidth: '960px', padding: '1.45rem 1.0875rem' }}>
        <main>{children}</main>
      </div>

      <FOOTER>
        <div style={{ margin: '0 auto', maxWidth: '960px', padding: '1.45rem 1.0875rem' }}>
          © Copyright {new Date().getFullYear()},{' '}
          <Link to="https://www.karim-hussain.com" style={{ color: 'inherit' }}>
            Karim Hussain
          </Link>
          . Built with
          {` `}
          <Link to="https://www.gatsbyjs.com" style={{ color: 'inherit' }}>
            Gatsby
          </Link>
        </div>
      </FOOTER>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
