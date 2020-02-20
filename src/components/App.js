import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import ListView from "./ListView"
import SingleView from "./SingleView"

export default function() {
  return (
    <Router>
      <div className="wrapper">
        <Route exact path="/" component={ListView} />
        <Route path="/:id" component={SingleView} />
      </div>
    </Router>
  )
}
