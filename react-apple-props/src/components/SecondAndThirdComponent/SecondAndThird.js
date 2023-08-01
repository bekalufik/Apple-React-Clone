import React, { Component } from 'react'

 class SecondAndThird extends Component {
  render() {
    return (
        <div className={this.props.classNameDiv}>
        <h2 className="font-weight-bold pt-5">{this.props.title}</h2>
        <h3 className={this.props.classNameH3}></h3>
        <p className={this.props.classNameP}>{this.props.pText}</p>
        <ul className="links-wrapper list-unstyled d-flex justify-content-center">
          <li className="pr-2"><a href="#">Learn more</a></li>
          <li className="pl-2"><a href="#">{this.props.linkText}</a></li>
        </ul>
      </div>
    )
  }
}

export default SecondAndThird