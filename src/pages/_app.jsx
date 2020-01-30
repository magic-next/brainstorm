import React from 'react';
import { Provider } from 'react-redux';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import createStore from '@/store';
import GlobalStyles from '@/styles/global';
import 'react-toastify/dist/ReactToastify.css';

class MyApp extends App {
  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <>
        <GlobalStyles />
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </>
    );
  }
}

export default withRedux(createStore)(MyApp);
