import * as React from 'react';
import Seo from '../components/seo';

import Layout from '../components/layout';

const AboutPage = () => {
  return (
    <Layout pageTitle='About page'>
      <h1>About Me</h1>

      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </Layout>
  );
};

export const Head = () => <Seo title='About me' />;

export default AboutPage;
