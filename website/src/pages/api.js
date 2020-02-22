import { Redirect } from '@reach/router';

import Page from 'components/Page';
import { withPrefix } from 'gatsby-link';
import React from 'react';

const API = () => (
  <Page title="API">
    <Redirect
      from={withPrefix('/api')}
      to={withPrefix('/api/basetable')}
      noThrow
    />
  </Page>
);

export default API;
