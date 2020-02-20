import React, { useState, useEffect } from "react"
import "../styles/single.css"
import users from "../users.json"
import {
  FaUser,
  FaEnvelope,
  FaMobileAlt,
  FaGlobeAmericas,
  FaArrowLeft
} from "react-icons/fa"

export default props => {
  const [img, setImg] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [location, setLocation] = useState("")

  useEffect(() => {
    const id = props.match.params.id

    const user = users.find(user => user.id === Number(id))

    setImg(user.picture.large)
    setName(user.name.first + " " + user.name.last)
    setEmail(user.email)
    setPhone(user.phone)
    setLocation(user.location.city + ", " + user.location.state)
  }, [props.match.params])

  function goBack(e) {
    e.preventDefault()
    props.history.push("/")
  }

  return (
    <div>
      <header>
        <button onClick={goBack}>
          <FaArrowLeft />
        </button>
        <img src={img} />
      </header>
      <ul className="single">
        <li>
          <FaUser /> {name}
        </li>
        <li>
          <FaEnvelope /> {email}
        </li>
        <li>
          <FaMobileAlt /> {phone}
        </li>
        <li>
          <FaGlobeAmericas />
          {location}
        </li>
      </ul>
    </div>
  )
}
