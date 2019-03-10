/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React from 'react'
import App, { Container } from 'next/app'
import { ThemeProvider } from 'emotion-theming'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Nav from './Components/Nav/Nav'

const theme = {
  colors: {
    primary: 'red'
  }
}

class Layout extends React.Component {
  render () {
    const { children } = this.props
    
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
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    )
  }
}
