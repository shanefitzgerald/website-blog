/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import React from 'react';
import App, { Container } from 'next/app';
import NextSeo from 'next-seo';
import { ThemeProvider } from 'emotion-theming';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';

import SEO from '../config/next-seo.config';

const theme = {
  colors: {
    primary: 'red'
  }
}

class Layout extends React.Component {
  render () {
    const { children } = this.props;
    
    return (
      <ThemeProvider theme={theme}>
        <section className="app" css={theme => ({ color: theme.colors.primary })}>
          MAIN APP START
          <Header />
          <Nav />
            {children}
          <Footer />
        </section>
      </ThemeProvider>
    )
  }
}

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <NextSeo config={SEO} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    )
  }
}
