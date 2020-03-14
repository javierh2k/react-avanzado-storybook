import React from 'react';
import { addDecorator, addParameters } from "@storybook/react";
// import { withThemesProvider } from "storybook-addon-styled-component-theme";
import {ThemeProvider} from 'styled-components'
import { DocsPage } from 'storybook-addon-deps/blocks';
import { withA11y } from '@storybook/addon-a11y';

import { theme } from '../src/theme'

addParameters({
  docs: { page: DocsPage },
  // dependencies: {
  //   withStoriesOnly: true,
  //   hideEmpty: true,
  // },

});

addDecorator(withA11y);

addDecorator(StoryFn => (
  <ThemeProvider theme={theme}>
    {/* <GlobalStyle /> */}
      <StoryFn/>
  </ThemeProvider>
))

// addDecorator(withThemesProvider(getAllThemes()));

import 'bootstrap/dist/css/bootstrap.min.css';