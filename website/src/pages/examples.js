import { Redirect } from '@reach/router';

import Page from 'components/Page';
import { withPrefix } from 'gatsby-link';
import React from 'react';

const Examples = () => (
  <Page title="Examples">
    <Redirect
      from={withPrefix('/examples')}
      to={withPrefix('/examples/default')}
      noThrow
    />
  </Page>
);

export default Examples;
