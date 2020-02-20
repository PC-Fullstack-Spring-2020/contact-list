import React from "react"
import "../styles/list.css"
import users from "../users.json"
import { Link } from "react-router-dom"

export default props => {
  return (
    <div className="list">
      <h2>My Peeps</h2>
      <ul className="userLink">
        {users.map((user, i) => (
          <li key={"userLink" + i}>
            <Link to={"/" + user.id}>
              <img className="avatar" src={user.picture.thumbnail} />
              <p>
                {user.name.first} {user.name.last}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
