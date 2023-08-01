import React, { Component } from 'react'

 class NavLinks extends Component {
  render() {
    return (
      
         <li key={this.props.unique} className="nav-item">
                <a className="nav-link js-scroll-trigger" href={this.props.reference}>{this.props.linksName}</a>
              </li>
     
    )
  }
}

export default NavLinks