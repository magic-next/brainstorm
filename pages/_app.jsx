import React from 'react';
import { Provider } from 'react-redux';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import createStore from '../store';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withRedux(createStore)(MyApp);
