import React from "react"
import Navbar from '../../components/Navbar'
import SEO from '../../components/SEO'
import "./style.scss";

class Layout extends React.Component {
  render() {
    const {children, title} = this.props
    return (
      <div>
        <SEO title={title} />
        <header>
          <Navbar/>
        </header>
        <div className="container-lg container-default">
          <main>
            {children}
          </main>
        </div>
      </div>
    )
  }
}

export default Layout
