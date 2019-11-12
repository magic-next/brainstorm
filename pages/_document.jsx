/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Document, { Main, NextScript, Head } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import GlobalStyles from './global';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) => sheet.collectStyles((
      <>
        <GlobalStyles />
        <App {...props} />
      </>
    )));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="br">
        <Head>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
