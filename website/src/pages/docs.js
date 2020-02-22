import { Redirect } from '@reach/router';

import Page from 'components/Page';
import { withPrefix } from 'gatsby-link';
import React from 'react';

const Docs = () => (
  <Page title="Docs">
    <Redirect
      from={withPrefix('/docs')}
      to={withPrefix('/docs/get-started')}
      noThrow
    />
  </Page>
);

export default Docs;
