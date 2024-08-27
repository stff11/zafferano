import React from 'react'
import Header from './Header'
import Navigation from './Navigation'
import Footer from './Footer'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Navigation />
      <ErrorBoundary>
        <div className="main-content">{children}</div>
      </ErrorBoundary>
      <Footer />
    </>
  )
}