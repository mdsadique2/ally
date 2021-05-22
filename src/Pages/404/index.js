import React from 'react'
import appStrings from 'Utilities/StringConst';
import { Link } from "react-router-dom";

import './style.css';
class Error404 extends React.Component {
  render() {
    return <React.Fragment>
      <section className="page page-404">
        <h1 className="title-404">{appStrings.text404}</h1>
        <h3 className="description-404">{appStrings.pageNotFound}</h3>

        <Link to="/">Go to home !!</Link>

      </section>
    </React.Fragment>
  }
}
export default Error404